class Person{
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson(){
        const personInfo = "Name:{"+this.name+"},email:{" +this.email+"},age:{"+this.age+"}";
        return personInfo;
    }
}
let P= new Person("name","email","age");
console.log(P.getPerson());
module.exports = Person;