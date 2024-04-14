const glass = {
  name: "Glass",
  color: "whwite",
  price: 12,
  isClean: true,
};
// for (let i of glass) {
//   console.log(i);
// } //you can not use for of loop directly on a object
for (let i in glass) {
  console.log(i);
  console.log(glass[i]);
}
// use of for of loop in an array
let arr = [12, 43, 54, 65, 77, 89];
for (let i of arr) {
  console.log(i);
}

// but  you can  use for of loop indirectly on a object
const keys = Object.keys(glass);
for (let i of keys) {
  console.log(i);
  console.log(glass[i]);
}

// Copy

let arr1 = [12, 34, 54, 65, 777, 87];
let useSped = [...arr1];
console.log(useSped); //to copy a array

// Merge
let num1 = [12, 43, 55, 4, 65, 76, 77];
let num2 = [90, 876, 900, 2345];
let newNum = [...num1, ...num2];
console.log(newNum);

// for of loop use in string
let srt = "Mamunur rashid";
for (let i of srt) {
  console.log(i);
}

let funct = (x, y, z) => x * y * z;
console.log(funct(5, 3, 2));

let stri = `I am a web developer.
I love to code.
I love to eat Biryani.
`;
let stri1 = "I am a web developer.\n I love to code. \n Ilove to eat Biryan";

console.log(stri1);
const arrowFu = (x, y = 10) => (x, y);
console.log(arrowFu(20));

let store = [];
const topArrow = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val.length % 2 === 0) {
      store.push(val);
    }
  }
  return store;
};
const numArr = [
  "mamnur",
  "rashid",
  "khan",
  "afridi",
  "shahin",
  "mamun",
  "wahid",
];
const send = topArrow(numArr);
console.log(store);

const avrg = (arr) => {
  let add = 0;
  for (let i in arr) {
    const getVal = arr[i];
    const sqr = getVal * getVal;
    add += sqr;
  }
  return add / arr.length;
};
const arrr2 = [2, 3, 4, 5, 6, 7, 8, 9];
const getVal = avrg(arrr2);
console.log(getVal);

const avvr = (arr1, arr2) => {
  const val = [...arr1, ...arr2];
  const result = Math.max(...val);
  return result;
};
const ar = [1, 3, 4, 5, 6, 7];
const ar1 = [9, 8, 7, 6, 5, 4];
const valu = avvr(ar, ar1);
console.log(valu);
