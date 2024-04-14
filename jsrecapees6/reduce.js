const Height = [12, 43, 67, 87, 98, 89, 66, 89, 90];
const Heights = [5, 1, 2, 3, 4, 6, 7, 8, 9, 10];
const total = Heights.reduce((prevVal, currentVal) => prevVal + currentVal, 0);
console.log(total);
// reduce on array like object
const products = [
  { id: 1, name: "samsung", price: 23456 },
  { id: 2, name: "Xiomi", price: 12453 },
  { id: 3, name: "NOkia", price: 784569 },
  { id: 4, name: "lenovo", price: 124789 },
  { id: 5, name: "hp", price: 47856932 },
];
const pri = products.map((product) => product.price);
console.log(pri);
const totals = pri.reduce((prevPri, currentPri) => prevPri + currentPri, 0);
// console.log(totals);
const redu = products.reduce((prev, curr) => prev + curr.price, 0);
console.log(redu);
const fil = products.filter((p) => p.price > 50000);
console.log(fil);
products.forEach((p) => console.log(p.price));

const find = products.find((p) => p.price > 60000);
console.log(find);
