const user = { id: 1, name: "mamunur", age: 24 };
console.log(user);
const strigiFy = JSON.stringify(user);
console.log(strigiFy);

const products = {
  id: 1,
  quantity: 123456,
  catagory: "all",
  list: ["lenovo", "mac", "nodepad", "apple", "del", "hp"],
  price: 45678921,
  features: {
    isSafe: true,
    meterial: "100%",
  },
};
console.log(products);
const str = JSON.stringify(products);
console.log(str);
const pars = JSON.parse(str);
console.log(pars);
