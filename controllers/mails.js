const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, name, message, cb) => {
  const mailOptions = {
    from: "umehvictormario@gmail.com",
    to: "umehvictormario@gmail.com",
    subject: subject + ' - ' + name,
    html: `<p>${message}</p><a href=mailto:${email}>${email}</a>`,
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
