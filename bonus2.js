function Person (name, age, favFood) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
}

Person.prototype.greet = function () {
  console.log(`${this.name} says hello!`);
}

function SuperHero (name, age, favFood, overPowered) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
  this.overPowered = overPowered;
}
//[[Prototype]]
SuperHero.prototype.__proto__ = Person.prototype;

const anya = new Person("Anya", 40, "Sour Keys");
const batman = new SuperHero("Bruce", 55, "steak");
/*
console.log(anya.__proto__.constructor.name);
console.log(anya.__proto__.__proto__.constructor.name);
console.log(batman.__proto__.constructor.name);
console.log(batman.__proto__.__proto__.constructor.name);
*/
let proto = anya.__proto__;
while (proto) {
  console.log(proto.constructor.name);
  proto = proto.__proto__;
}

proto = batman.__proto__;
while (proto) {
  console.log(proto.constructor.name);
  proto = proto.__proto__;
}
batman.greet();

console.log(Object.getOwnPropertyNames(anya));
console.log(Object.getOwnPropertyNames(batman));
