const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const status = document.getElementById("status");

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  2;
  let mail = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  //   console.log(mail);

  //3.
  //   sendMail(mail);
  fetch("/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mail),
  }).then((response) => {
    form.reset();
    response.json().then((data) => {
      if (data.status == "error") {
        status.classList = "error";
        status.innerHTML = data.message;
        console.log("error");
      } else {
        status.classList = "success";
        status.innerHTML = data.message;
        console.log("success");
      }
    });
  });
});
// const sendMail = (mail) => {
//     console.log(mail);
//   //1.
//   fetch("/send", {
//     method: "POST", //2.
//     body: mail, //3.
//   }).then((response) => {
//     return response.json();
//   });
// };
