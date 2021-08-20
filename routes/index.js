const express = require("express");
const sendMail = require("../controllers/mails");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;
  sendMail(email, subject, name, message, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).json({status: 'error', message: "internal Error" });
    } else {
      res
        .status(200)
        .json({status: 'success', message: "Message sent! I will get back to you shortly😊" });
    }
  });
});

module.exports = router;
