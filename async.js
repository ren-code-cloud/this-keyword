const asyncDev = {
  name: "asyncDev",
  greet: function() {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },
  arrowGeeet: () => {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },
  friend: {
    name: "async's friend",
    greet: function() {
      console.log(this);
      console.log(`${this.name} says hi!`);
    },
  },
};

//asyncDev.greet();
//asyncDev.arrowGeeet();
asyncDev.friend.greet();