// There are seven types data in programming
// Main data types are two types 1. primitive and 2.Non-primitive
// 1.primitive data types are 5 types as:1.number, 2. string, 3.boolean, (4.null, 5.undefine) also known as trivial data type
// 2.Non-primitive are 2 types as:1.Object and 2.array

/**
 * There are 8 ways to get undefine value
 * 1.Variable that is not initialized, will give undefine
 * 2.function with no return
 * 3.parameter that is no passed argument will be undefined.
 * 4.if there is nothing to return.
 * 5. property of an object that does not exist in object that will give undefine.
 * 6.In an array where aan index that does not exist it will geve undefined.
 * 7.deleting an element inside an array
 */

let a;
console.log(a);

function noretun(a, b) {
  const total = a + b;
}
console.log(noretun());

function noPassParam(a, b, c) {
  console.log(a, b, c);
}
console.log(noPassParam(12, 30));

function noReturn(a, b) {
  const total = a + b;
  // return a + b;
  return;
}
console.log(noReturn(10, 20));

const person = {
  name: "Mamunur",
  age: 56,
  salary: 45678,
};
console.log(person.salary, person.hobby);

const array = [12, 32, 45, 67, 8];
console.log(array[1], array[3], array[5]);
