/* 
   Constructor Function (ThisPerson):
   The ThisPerson function is designed to be used as a constructor. When called with the new keyword, it creates a new object and assigns the provided arguments to its properties. In this case, the object created will have name, age, and favouriteFood properties. The this keyword refers to the newly created object.
*/

function ThisPerson (name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

/* Regular Function (ProtoPerson):
The ProtoPerson function is a regular function that returns an object. It uses shorthand property initialization, which allows you to directly assign values to properties with the same name as the provided variables. This approach does not require the use of the new keyword. When called, it creates and returns an object with the specified properties.
*/
function ProtoPerson (name, age, favouriteFood) {
  const instance =  { // short-hand property initialization 
    name,
    age,
    favouriteFood,
  };
  instance.__proto__ = ProtoPerson.prototype;
  return instance;
}
const thisPerson = new ThisPerson("This", 0, "coolies");
const protoPerson = ProtoPerson("Proto", 1, "?");
//console.log(thisPerson);
//console.log(protoPerson);

/* 
   In summary, the difference between the two approaches lies in the use of the constructor function (ThisPerson) for creating objects and the regular function (ProtoPerson) for returning objects directly. The new keyword is used with the constructor function, while the regular function is called like any other function and returns the object directly.
  */
console.log(thisPerson.__proto__.constructor.name);
console.log(thisPerson.__proto__.__proto__.constructor.name);
console.log(protoPerson.__proto__.constructor.name);
console.log(protoPerson.__proto__.__proto__.constructor.name);
/* 
     all objects in JavaScript ultimately inherit from Objec
    .prototypel, which serves as the top-level prototype in the
    prototype chain.
*/