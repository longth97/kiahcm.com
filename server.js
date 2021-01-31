const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const mailer = require("./mailer.config/config");

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

    mailer({ email, name, text: message })
      .then(() => {
        console.log("success");
        res.send("success");
      })
      .catch((error) => {
        console.log("failed", error);
        res.send("badddd");
      });
  });

  http.createServer(server).listen(httpPort);
  https.createServer(options, server).listen(httpsPort);
});
