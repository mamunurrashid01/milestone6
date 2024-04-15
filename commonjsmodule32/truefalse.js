/**
 * Truethy
 * true
 * any kind of number(+ve or -ve) is truthy accept 0
 * any string is truthy accept empty string
 *with space in empty string is truthy
*"0" is truthy value
*"false "is truthy value
*
*empty object is truthy value
*empty array is truthy value
*
*


/**
 * 
 * Falsy
 * false
 * 0 zero is falsy
 * empty string is falsy
 * undefined is a falsy
 * null is falsy value
 */

// N.B to check falsy
const x = 0;
if (!x) {
  console.log("X, is a falsy value");
} else {
  console.log(" X, is a truthy value");
}

// N.B to check truthy
const p = null;
if (!!p) {
  console.log("P, is a truthy value");
} else {
  console.log("P, is a falsy value");
}

// == or === equal

const num1 = 12;
// const num2 = 12;
const num2 = "12";
if (num1 === num2) {
  console.log("Both number are equal");
} else {
  console.log("Both number are not equal");
}

// const num3 = 1;
// const num4 = true;
// if (num3 === num4) {
//   console.log("Both number are equal");
// } else {
//   console.log("Both number are not equal");
// }
// const num3 = 1;
// const num4 = true;
// if (num3 == num4) {
//   console.log("Both number are equal");
// } else {
//   console.log("Both number are not equal");
// // }
// const num3 = 0;
// const num4 = true;
// if (num3 == num4) {
//   console.log("Both number are equal");
// } else {
//   console.log("Both number are not equal");
// }
const num3 = 0;
const num4 = false;
if (num3 == num4) {
  console.log("Both number are equal");
} else {
  console.log("Both number are not equal");
}

// N.B that means non primitive data always are not equal but primitive data we can check in this way
// const first = {};
// const second = {};
// if (first === second) {
//   console.log("Both are equal");
// } else {
//   console.log("Both are not equal");
// }
const first = [];
const second = [];
if (first === second) {
  console.log("Both are equal");
} else {
  console.log("Both are not equal");
}
