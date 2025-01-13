console.log("testing the Js");
/*
Browser => the "window" object

this "window" object has these two methods:
> alert("test");
> prompt("what's your name?");

No need to use window (optional):
window.alert("Access Denied!");
window.prompt("what's your name?");
*/

// alert("Alert Window");
// let name = prompt("What's your name?");
// document.write("<h1>Review JS</h1>");

/*
    Classes:
    Classes are a template for creating objects. 
    Class is not an object itself, but a template (blue print) for objects
    They encapsulate data with code to work on that data. 
    Classes in JS are built on prototypes but also have some syntax and semantics 
    that are not shared with ES5 class-like semantics.
    Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

/* 
OOP => A PIE 

Access Modifiers (Visibility Modifiers) in "Java":
- Java: public => in JS by default
- Java: private => in JS using the # symbol
- Java: protected
- Java: default (if nothing is specified)
*/
// Classes and Objects In JS
class Car {
    /*
     Constructor: 
     - a special built-in method to construct/create an object
     - is triggered/called when we instantiate an object from this class
     - if you do not define a constructor method, 
     JavaScript will add an empty constructor method.
    */
    constructor(brand, type, description, wheels, owner) {
        /*
        Properties => Class Variables

        With class properties:
        - We use the keyword "this" that refer to the current object of the class
        - We DO NOT use "const", "let", or "var"
        */

        // This class has five initial properties:
        this.brand = brand;
        // in Java => private String brand;
        this.type = type;
        this.description = description;
        this.wheels = wheels;
        this.owner = owner;

        /*
        NOTE: 
        Please be advised that "this" keyword is required to access class methods 
        within the class itself.
        Otherwise, JS will will trow this error: 
        "Uncaught ReferenceError: wheel is not defined"
        */
    }

    /*
    Methods:
    > Functions inside a class
    > We don't use the keyword "function" when we create them inside a class
    */

    // Methods: 
    describeCar() {
        document.write();
        /* 
        NOTE:
        document => HTML document (refer to the current running web page)
        write() => a method of document object
        We cannot use document with node (node is using terminal)
        */

        // Concatenation => +
        document.write(this.owner + " has " + this.type);
        // String Template: ` ` with ${ }
        document.write(`<p>
            ${this.owner} has ${this.type}. 
            It's ${this.wheel}-wheel drive. 
            This car is ${this.description}
        </p>`);
    } // describeCar()
} // end class

// Main Script:

// Creating a new instance (object) of a Car Class:
// In Java=> Car car1 = new Car();

// Check this example for testing:
/*
    Notice that I am using "let" keyword to declare a variable,
    but it's recommended to use "const" keyword 
    if you have no intention to change its value later
*/
let testCar = new Car();
console.log(testCar);
/*
As we didn't pass any value, so all object properties will be "undefined":
Car {description: undefined, wheels: undefined, owner: undefined}
description: undefined
owner: undefined
wheels: undefined
[[Prototype]]: Object
*/

// Our constructor expecting these values with the same order: 
// brand, type, description, wheels, owner
const car1 = new Car('Nissan', "SUV", "Demo Version", 4, "Martin Smith");

car1.describeCar();