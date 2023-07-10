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
const boundGreet = asyncDev.greet.bind({name: "Iron man"});
//console.log(boundGreet);
//boundGreet("hello", "there");

asyncDev.friend.greet = asyncDev.friend.greet.bind({name: "Iron man"});
asyncDev.friend.greet(1,2);


