const book = {
  name: "Harry Potter",
  author: "J.K. Rowling",
  characters: {
    mainChars: ["Harry", "Ron", "Hermione"],
    list: function(array) {
      console.log(this);
      for (const char of this.mainChars) {
        console.log(char);
      }
    }
  }
};

book.characters.list();

const boundListFunction = book.characters.list.bind({
  mainChars: ["Draco", "Severus", "Voldermort"]
})
boundListFunction();
book.characters.list();