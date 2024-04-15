const data = {
  Sofia: {
    id: 33,
    study: [
      {
        primary: [
          { shool_name: "ABC primary school" },
          { location: "Peter burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St. Lorence" },
        ],
      },
    ],
  },
};

console.log(data.Sofia.study[1].secondary[1].location);

const oddArr = [1, 3, 5, 7, 9];
let newArr = [];
for (let i = 0; i < oddArr.length; i++) {
  let getVal = oddArr[i];
  let pluss = getVal + 1;
  newArr.push(pluss);
}
console.log(newArr);
// another away
const map = oddArr.map((pls) => pls + 1);
console.log(map);

const arr = [12, 34, 54, 80, 60, 54, 40];
const cons = arr.filter((p) => p % 10 === 0);
console.log(cons);

const find = arr.find((p) => p % 10 === 0);
console.log(find);

const arrObj = [
  { name: "Nodi", age: 28, position: "senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Shobuj", age: 30, position: "senior" },
];

const fil = arrObj.filter((p) => p.position == "senior");
console.log(fil);

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];
const redd = people.reduce((prev, curre) => prev + curre.age, 0);
console.log(redd);

const getAge = people.map((age) => age.age);
console.log(getAge);

const redu = getAge.reduce((prev, curre) => prev + curre, 0);
console.log(redu);
