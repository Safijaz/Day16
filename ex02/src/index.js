//Only change code below this line
class Book{
    constructor(title) {
        this._title= title;
    }
    get title(){
        return this._title;
    }
    set title(newTitle){
      this._title= newTitle;
    }
}

//Only change code above this line 
const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
const littlePrinceNewTitle= new Book ("Le Petit Prince");
console.log(littlePrince.NewTitle);

module.exports = Book;