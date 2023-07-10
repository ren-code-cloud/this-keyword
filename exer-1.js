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
}

book.characters.list();
const book2 = {
  characters: {
    mainChars: ["Draco", "Severus", "Voldemort"]
  }
}
/*
book.characters.list = book.characters.list.bind(["Draco", "Severus", "Voldemort"]);
book.characters.list();
*/
//book.characters.list.call(book2.characters)
book.characters.list.call(
  {
    mainChars: ["Draco", "Severus", "Voldemort"],
  }
  )