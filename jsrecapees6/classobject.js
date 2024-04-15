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

class teacher {
  id = 2;
  constructor(name, subject, constact) {
    this.name = name;
    this.subject = subject;
    this.constact = constact;
  }
  description() {
    console.log("He is the popular teacher over the country");
  }
}
const getTeach = new teacher("Shah Jahan topan", "Physics", "01719187675");
console.log(getTeach);
getTeach.description();

// inheritance prototypes
class vihechal {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  aboutVichal() {
    console.log(
      "There such as a machin that easy to life any hard work it call vihechal"
    );
  }
}
new vihechal("Track", "123456");
class Bus extends vihechal {
  constructor(name, price, color, isClean) {
    super(name, price);
    this.color = color;
    this.isClean = isClean;
  }
  aboutBus() {
    console.log(
      "A bus is common vihichal over the world to transport public from one place to another"
    );
  }
}

const result = new Bus("red", true);
console.log(result);
