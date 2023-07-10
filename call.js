const asyncDev = {
  name: "asyncDev",
  greet: function(a,b) {
    console.log(this);
    console.log(a, b)
    console.log(`${this.name} says hi!`);
  },
  arrowGeeet: () => {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },
  friend: {
    name: "async's friend",
    greet: function(a, b) {
      console.log(this);
     // console.log(args);
     console.log(a, b);
      console.log(`${this.name} says hi!`);
    },
  },
};

asyncDev.greet();
asyncDev.friend.greet();
console.log("-------------");
asyncDev.greet.call({name: "async man", age: 2}, ["hello"]);
asyncDev.friend.greet.call({name: "super man", age: 3}, ["hello"], 100);
