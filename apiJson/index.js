// how to call api with below procedur
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
function callMe() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function clickUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    // .then((data) => console.log(data));//i can get data in this way or
    .then((data) => displayUsers(data)); //also i can send data displayusers function and then get the data with pparrameter getData
}

function displayUsers(getData) {
  console.log(getData);
}
