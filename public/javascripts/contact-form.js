const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  2.
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
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(mail), 
  }).then((response) => {
      console.log(response.json())
    // return response.json();
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
