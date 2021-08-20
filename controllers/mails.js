const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "938973841807d7e9361a978a528884c1-9776af14-5031cb31",
    domain: "sandbox3b91338dce684f619cde866e3cb0cd2f.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, name, message, cb) => {
  const mailOptions = {
    from: email,
    to: "umehvictormario@gmail.com",
    subject,
    html: `<h3>${name}</h3><br><p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
