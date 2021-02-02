const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const nodemailer = require("nodemailer");

const handle = app.getRequestHandler();
const server = express();
const httpPort = process.env.PORT || 3000;
const httpsPort = 3443;
const options = dev
  ? {
      /**
       * IF YOU NEED HTTPS FOR LOCALHOST, UNCOMMENT THIS
       * AND GENERATE THE key & crt FOLLOW THIS COMMAND:
       * bash local_certificate/cer.sh
       * Read more: local_certificate/readme.md
       */
      // key: fs.readFileSync("local_certificate/localhost.key"),
      // cert: fs.readFileSync("local_certificate/localhost.crt"),
    }
  : {};

server.use(
  express.static(__dirname + "/public", { maxAge: "365d", redirect: false })
);
server.use(
  express.static(__dirname + "/.next/static", {
    maxAge: "365d",
    redirect: false,
  })
);
server.use(
  express.static(__dirname + "/_next/static", {
    maxAge: "365d",
    redirect: false,
  })
);
server.use(bodyParser.json());

app.prepare().then(() => {
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", (req, res) => {
    const { email = "", name = "", message = "" } = req.body;

    // If modifying these scopes, delete token.json.
    const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    const TOKEN_PATH = "token.json";

    console.log(TOKEN_PATH);

    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     type: "OAuth2",
    //     user: "khangnn0806@gmail.com",
    //     refreshToken:
    //       "1//04r9H3WFUczXGCgYIARAAGAQSNwF-L9IrCZx6Uy29R-Z2PmMX3pyR2xrWc_Ao2Poyx__9EJAkzhPCk-5kI527RgsLh_c2Z1h91EY",
    //     accessToken:
    //       "ya29.a0AfH6SMB2dwe_wLhu9J4ksA8KbfottaVfB_rRLLyO74TizmYwwJgq2bypBDSGsm0JxFCO5_UxNLBuFeg7fza7t93YNda7igBRXOyTiQo_2FS6qYAqPsqOYWEGNk1GHOEzIe1SK16UKkjlA0ZvaoM-d6isHopRuNsfuF4_G__T79c",
    //     clientId:
    //       "880532530739-fipqq3vkgn3dcjoctpkakccdmho9m7qi.apps.googleusercontent.com",
    //     clientSecret: "VIZ9FZhC4_hs-uH2v4gYJWZY",
    //   },
    // });

    const send = ({ email, name, text }) => {
      const from = name && email ? `${name} <${email}>` : `${name || email}`;
      const message = {
        from,
        to: "khangnn0806@gmail.com",
        subject: `New message from ${from}`,
        text,
        replyTo: from,
      };

      return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
          error ? reject(error) : resolve(info)
        );
      });
    };

    // Load client secrets from a local file.
    fs.readFile("credentials.json", (err, content) => {
      if (err) return console.log("Error loading client secret file:", err);
      // Authorize a client with credentials, then call the Gmail API.
      authorize(JSON.parse(content), listLabels);
    });

    /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     * @param {Object} credentials The authorization client credentials.
     * @param {function} callback The callback to call with the authorized client.
     */
    function authorize(credentials, callback) {
      const {
        client_secret,
        client_id,
        redirect_uris,
      } = credentials.credentials;
      const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
      );
      // Check if we have previously stored a token.
      fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        console.log(JSON.parse(token));
        callback(oAuth2Client);
      });
    }

    /**
     * Get and store new token after prompting for user authorization, and then
     * execute the given callback with the authorized OAuth2 client.
     * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
     * @param {getEventsCallback} callback The callback for the authorized client.
     */
    function getNewToken(oAuth2Client, callback) {
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
      });
      console.log("Authorize this app by visiting this url:", authUrl);
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question("Enter the code from that page here: ", (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
          if (err) return console.error("Error retrieving access token", err);
          oAuth2Client.setCredentials(token);
          // Store the token to disk for later program executions
          fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
            if (err) return console.error(err);
            console.log("Token stored to", TOKEN_PATH);
          });
          callback(oAuth2Client);
          const from =
            name && email ? `${name} <${email}>` : `${name || email}`;
          const message = {
            from,
            to: "khangnn0806@gmail.com",
            subject: `New message from ${from}`,
            text,
            replyTo: from,
          };
          return new Promise((resolve, reject) => {
            oAuth2Client.transporter.sendMail(message, (error, info) =>
              error ? reject(error) : resolve(info)
            );
          });
        });
      });
    }

    /**
     * Lists the labels in the user's account.
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    function listLabels(auth) {
      const gmail = google.gmail({ version: "v1", auth });
      gmail.users.labels.list(
        {
          userId: "me",
        },
        (err, res) => {
          if (err) return console.log("The API returned an error: " + err);
          const labels = res.data.labels;
          if (labels.length) {
            console.log("Labels:");
            labels.forEach((label) => {
              console.log(`- ${label.name}`);
            });
          } else {
            console.log("No labels found.");
          }
        }
      );
    }

    // send({ email, name, text: message })
    //   .then(() => {
    //     console.log("success");
    //     res.send("success");
    //   })
    //   .catch((error) => {
    //     console.log("failed", error);
    //     res.send("badddd");
    //   });
  });

  http.createServer(server).listen(httpPort);
  https.createServer(options, server).listen(httpsPort);
});
