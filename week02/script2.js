/*
A PIE in OOP (Object-Oriented Programming):
Abstraction
Encapsulation
Inheritance
Polymorphism
*/
// P: Overload and Override
// one more example
class Person {
    // Properties: Class fields (variables inside a class)   
    // Declaring the class property before initializing it
    // It's an optional Step but good for readability
    name; // we don't use let or const

    constructor(name) {
        this.name = name;
    }

    // a method: a function inside a class
    greet() {
        document.write(`<br>Hello ${this.name}!`);
    }
} // class Person

// Inheritance:
class Member extends Person {
    // nothing, just an empty class
}

class User extends Person {
    // Property:
    age;
    constructor(name, age) {
        // call the constructor from the super class:
        // using the super() function
        super(name);
        /*
    You can think about super() as we are calling the constructor() function from the parent/superclass
    and passing the value(s) for its required parameter(s)
    */
        this.age = age;
    }

    // Override: Modify the greet() method from the superclass
    greet() {
        document.write(`<br>Hello ${this.name}! Your age is ${this.age}`);
    }
} // class User

// main script:
let member1 = new Member("Alex Chow");
member1.greet(); // the same method from the super class

let user1 = new User("Kate Wilson", 28);
user1.greet(); // the override method from the sub-class

