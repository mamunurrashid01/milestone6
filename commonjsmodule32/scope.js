function BlockScope(a, b) {
  const total = a + b;
  return total;
}
BlockScope(2, 4);
// console.log(total);

function numberGreeting() {
  let num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}
let res = numberGreeting();
res();
function greetings(fund, name) {
  fund(name);
}

function morning(name) {
  console.log("Good Morning", name);
}
greetings(morning, "Mamunur");
