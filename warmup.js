const pet = {
  name: "Nemo",
  type: "Fish",
  age: 2,
}
const person = {
  name: "shesh",
  type: "Humangoloid",
  age: 12,
}
Object.prototype.sayHello = function () {
  console.log(this)
  console.log(`
  ${this.name} is a ${this.type} and is ${this.age} years old!
  ${this.name} says hi!`);
}
pet.sayHello();
person.sayHello();