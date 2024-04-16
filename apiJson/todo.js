// always try to visit JSON placeholder a free and fake api store

function getTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

function displayTodos(data) {
  const container = document.getElementById("todo-container");
  for (let item of data) {
    console.log(item);
    const postdiv = document.createElement("div");
    postdiv.classList.add("todo");
    postdiv.innerHTML = `
    <h1>${item.id}</h1>
    <h2>${item.title}</h2>
    <p>${item.completed === true ? "completed" : "incompleted"}</p>
    `;
    container.appendChild(postdiv);
  }
}
getTodo();
