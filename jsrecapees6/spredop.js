const max = Math.max(2, 6, 7, 88, 9, 99);
// console.log(max);
const num = [23, 54, 66, 78, 33, 23, 90];
const maxVal = Math.max(...num);
// console.log(maxVal);

const friends = ["mamin", "rashid", "khan", "ratan"];
const bondho = friends;
// bondho.push("Wahid");
// console.log(friends);
// console.log(bondho);

const arr = [12, 32, 43, 54, 66, 76, 89, 98, 90];
const arr1 = [...arr, 100, 200, 541];
arr1.push(333);
console.log(arr1);
