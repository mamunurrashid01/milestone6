// data access

const data = [{ id: 111, name: "mamunur", address: "Dhaka" }];

console.log(data); //it's an array like object
console.log(data[0]); //out get only object
console.log(data[0].name); //out will value of the name

// nested object
// optional chaining
const products = {
  count: 5000,
  mobile: [
    { name: "samsung", price: 12345, color: "black" },
    { name: "Nokia", price: 456789, color: "purple" },
  ],
};
console.log(products.mobile); //output will the second product that is mobile
console.log(products.mobile[1]); //out will second index of moblie
console.log(products.mobile[1].price); //out will second index of moblie of price

const user = {
  id: 1,
  name: "mamunur",
  address: {
    city: "dhaka",
    road: "12/A32",
  },
  contact: 17191487675,
};
console.log(user.address); //to get address
console.log(user.address.road.contact?.second); //here ' ? ' is the optional chaining
