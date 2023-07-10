Object.prototype.greet = function () {
  console.log(this);
  console.log(`${this.name} says hello there!`);
}
const ren = {
  name: "ren",
}

const asyncDev = {
  namee: "asyncDev",
}
ren.greet();
asyncDev.greet();