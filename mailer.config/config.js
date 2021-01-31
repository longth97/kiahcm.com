const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: "khangnn0806@gmail.com",
    refreshToken:
      "1//04r9H3WFUczXGCgYIARAAGAQSNwF-L9IrCZx6Uy29R-Z2PmMX3pyR2xrWc_Ao2Poyx__9EJAkzhPCk-5kI527RgsLh_c2Z1h91EY",
    accessToken:
      "ya29.a0AfH6SMB2dwe_wLhu9J4ksA8KbfottaVfB_rRLLyO74TizmYwwJgq2bypBDSGsm0JxFCO5_UxNLBuFeg7fza7t93YNda7igBRXOyTiQo_2FS6qYAqPsqOYWEGNk1GHOEzIe1SK16UKkjlA0ZvaoM-d6isHopRuNsfuF4_G__T79c",
    clientId:
      "880532530739-fipqq3vkgn3dcjoctpkakccdmho9m7qi.apps.googleusercontent.com",
    clientSecret: "VIZ9FZhC4_hs-uH2v4gYJWZY",
  },
});

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
module.exports = send;
