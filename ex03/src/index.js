// Only change code below this line
class Person{
        static display(){
            return "Static method is invoked from Person class";
        }
        static show(){
            return this.display();
        }
    }
    
//Only change code above this line 
var message = new Person();
console.log(Person.show());
module.exports = Person;


