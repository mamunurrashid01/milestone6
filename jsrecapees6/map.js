const number = [4, 5, 5, 7, 8, 9];
// how can i get the double of the number array
const dubled = [];
for (let num of number) {
  const double = num * 2;
  dubled.push(double);
}
// console.log(dubled);
// another away to get double value of each arrray using map()mathod
function doubleIt(num) {
  return num * 2;
}
const getDouble = number.map(doubleIt);
// console.log(getDouble);
// another away to get double value

const arrow = (n) => n * 2;
const val = number.map(arrow);
// console.log(val);
// another away to get double value
const vall = number.map((n) => n * 2);
// console.log(vall);

const numbers = [12, 54, 65, 66, 34, 23, 65, 78, 88];
const result = numbers.map((n) => n + 5);
// console.log(result);

const results = numbers.map((n) => n / 2);
// console.log(results);
const friends = ["tom", "john", "devid", "oliver"];
const res = friends.map((n) => n.length);
const ress = friends.map((n) => n[0]);
console.log(ress);
