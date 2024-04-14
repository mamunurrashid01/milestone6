const person = {
  name: "mamunur",
  age: 36,
  hobby: "gardening",
  skill: "pkrogramming",
};
person.name = "Rashid";
person.qualif = "Hsc";
delete person.age;
console.log(person);

const array = ["mamunur", "rashid", "Rahat", "Rotan", "Najir"];
console.log(array);
console.log(array.slice(1, 4));
console.log(array.splice(1, 1, "abdullah"));
console.log(array);

const numbers = [12, 43, 54, 33, 67, 76, 88, 98, 79, 12, 32, 13];
let sum = 1;
for (let i = 0; i < numbers.length; i++) {
  const numIndex = i;
  const getVal = numbers[numIndex];
  if (getVal % 2 == 0) {
    console.log(`the even number is : ${getVal}`);
  } else {
    console.log(`the odd number is : ${getVal}`);
  }
  console.log(numIndex);
  sum += getVal;
}
console.log(sum);

function number(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  return result;
}
console.log(number(10, 10));
