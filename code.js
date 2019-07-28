// import axios from axios;
// const axios =

let formHandle = document.getElementById("form");
let nameHandle = document.getElementById("name");
console.log(nameHandle);
let emailHandle = document.getElementById("email");

formHandle.addEventListener(
  "submit",
  function(e) {
    e.preventDefault();
    //req body
    let body = {
      name: nameHandle.value,
      email: emailHandle.value
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", body)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  false
);
