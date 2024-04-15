function sum(a, b, c) {
  console.log(arguments);
  // for (let i = 0; i < arguments.length; i++) {
  //   console.log(arguments[i]);

  // }
  const getArr = [...arguments];
  console.log(getArr);
  return a + b + c;
}
console.log(arguments);
// console.log(sum(12, 43, 54));
const sendVal = sum(12, 43, 44, 54, 65, 56, 76);
// console.log(typeof sum);
console.log(sum.length); //it show hhow many parameter are in the function

// primitive data have no change outer scope of the function passed by value
let num1 = 5;
let num2 = 10;
function add(a, b) {
  a = 10;
  return a + b;
}
console.log(num1);
console.log(add(num1, num2));
console.log(num1);

// non primitive data always get reference tnat means pass by reference
const student1 = { name: "mamunur", age: 23 };
const student2 = { name: "rashid", age: 45 };
function refer(a, b) {
  a.name = "Wahid";
  return [a, b];
}
console.log(student1);
console.log(refer(student1, student2));
console.log(student1);
