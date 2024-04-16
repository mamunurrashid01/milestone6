fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => showData(data));

function showData(data) {
  const div = document.getElementById("post-container");
  for (let item of data) {
    console.log(item);
    const postdiv = document.createElement("div");
    postdiv.classList.add("post");
    postdiv.innerHTML = `
    <h1>${item.userId}</h1>
    <h4>${item.title}</h4>
    <p>${item.body}</p>
    `;
    div.appendChild(postdiv);
  }
}
