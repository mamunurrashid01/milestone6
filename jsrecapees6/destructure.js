const actor = {
  name: "Zalil",
  age: 42,
  phone: "01719187675",
  money: 1452369886636,
};
// object  destructuring discussion
const { name, money } = actor; //if the variable right side has a object then the right side has a must be a object
console.log(name, money);

// array destructuring
const numbers = [12, 54, 65, 90];
const [x, y, z, k] = numbers;
console.log((x, y, z, k));

function destruct(a, b) {
  return [a, b];
}
const [first, second] = destruct(10, 20);
console.log(first, second);

const person = {
  name: "Habib",
  age: 87,
  hobby: "swimming",
};
const { name: num, hobby: shokh } = person;
console.log(num, shokh);

let p = 12;
let q = 20;
[p, q] = [q, p];
console.log(p, q);

const glass = {
  name: "Glass",
  color: "whwite",
  price: 12,
  isClean: true,
};

console.log(glass);
const keys = Object.keys(glass);
console.log(keys);
const value = Object.values(glass);
console.log(value);
const entr = Object.entries(glass);
console.log(entr); //it return two dimensional array

// delete from object
delete glass.name;
console.log(glass);
const { isClean, ...restObj } = glass;
console.log(restObj);
// freeze
Object.freeze(glass);
glass.origin = "Bangladesh";
console.log(glass);

// seal

Object.seal(glass);
glass.price = 5000;
console.log(glass);
