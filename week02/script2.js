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
    /*
    Properties: Class fields (variables inside a class)   
    NOTE:
    Declaring the class property before initializing it
    It's an optional Step!  
    If you omit this optional step, 
    the code line => this.name = name; in the constructor 
    will create the name property before initializing it.
    
    But listing properties explicitly in the class declaration 
    is better for readability
    to see which properties are part of this class.
    Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
    */

    // Declaring the class property before initializing it (Optional Step but good for readability)
    name; // we don't use let or const

    constructor(name) {
        this.name = name;
    }

    // a method: a function inside a class
    greet() {
        document.write(`<br>Hello ${this.name}!`);
    }
} // class Person

// Inheritance: using "extends" keyword
class Member extends Person {
    // nothing, just an empty class
}

class User extends Person {
    // Property:
    age;
    constructor(name, age) {
        // call the constructor from the super class:
        /*
        Using the super() function
        super() function is used to pass values to the parent class
        we can use "super" keyword with a method name to access methods from the parent class
        
        You can think about super() as we are calling the constructor() function 
        from the parent/superclass and passing the value(s) for its required parameter(s)
        as we do in Java
        */
        super(name);

        // Adding the new properties for the subclass
        this.age = age;
    }

    // Override: Modify the greet() method from the superclass
    /*
    Overriding Method or Property
    If the child/subclass has the same method or property name as that of the parent/superclass, 
    its instance (object) will use the method and property of the child/subclass. 
    In OOP, this concept is called method overriding:
    */
    greet() {
        document.write(`<br>Hello ${this.name}! Your age is ${this.age}`);
    }
} // class User

// Another example
class Instructor extends Person {
    constructor(name, course) {
        super(name); // Now, we are done with required parameter(s) in the superclass
        this.course = course;
    }

    teach() {
        document.write(`<br>My name is ${this.name}, and I will be your "${this.course}" instructor.`);
    }

    greet() {
        document.write(`<br>Hello all, my name is ${this.name} and I will be your instructor to teach you using "My Way"!`);
    }
} // class Instructor

// Main Script:
let member1 = new Member("Alex Chow"); // calling the constructor from the parent class/superclass
member1.greet(); // calling the method .greet() from the superclass

let user1 = new User("Kate Wilson", 28);
user1.greet(); // the override method from the sub-class

