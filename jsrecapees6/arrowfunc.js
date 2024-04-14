// normal function
function add(a, b) {
  return a + b;
}
console.log(add(10, 10));

const funct = function () {
  return 10 + 20;
};
console.log(funct());
// arrow function
const adds = () => 45 + 45; //implicit arrow function
console.log(adds());
const arr = (a, b) => {
  //explicite arrow function
  return ` This is arrow function 
  return ${a + b}`;
};
console.log(arr(10, 10));

const getNum = (numbers) => numbers[3];
const array = [10, 23, 45, 55, 78, 23];
const getnum = getNum(array);
console.log(getnum);

const getObj = (person) => person.age;
const obj = { name: "Mamunur", age: 45 };
const getVal = getObj(obj);
console.log(getVal);

const adding = (x, y, z) => {
  const res1 = x + y;
  const res2 = y + z;
  const result = res1 + res2;
  return result;
};
console.log(adding(10, 2, 3));
