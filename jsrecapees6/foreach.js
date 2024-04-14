const number = [12, 34, 5, 67, 87, 99];
const result = number.forEach((num) => console.log(num)); //never return

const filter = number.filter((x) => x > 50);
const filters = number.filter((x) => x % 2 === 0);
const odd = number.filter((x) => x % 2 !== 0);
console.log(odd);
const friends = ["tom", "john", "devid", "oliver"];
const oddFr = friends.filter((p) => p.length % 2 === 1);
console.log(oddFr);

const Height = [12, 43, 67, 87, 98, 89, 66, 89, 90];
const getHeight = Height.find((x) => x > 80);
console.log(getHeight);
