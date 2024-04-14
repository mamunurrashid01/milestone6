// class and object discussion

class person {
  id = 11;
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  lenguage(vasha) {
    console.log(`Can speak in your mother lenguage, ${vasha}`);
  }
}
const getVal = new person("Mamunur rashid");
console.log(getVal);
getVal.lenguage("I can speak in Bangla");
