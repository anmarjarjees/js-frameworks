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
Access Modifiers (Visibility Modifiers) in Java:
- Java: public => in JS by default
- Java: private => in JS using the # symbol
- Java: protected
- Java: default (if nothing is specified)
*/
// Classes and Objects In JS
class Car {  
    // Constructor: a special method to construct/create an object
    constructor(brand, type, description, wheels, owner) {
        /*
        Properties => Class Variables
        - We use the keyword "this" that refer to the current object of the class
        - We DO NOT use "const", "let", or "var"
        */
        this.brand = brand;
        // in Java => private String brand;
        this.type = type;
        this.description = description;
        this.wheels = wheels;
        this.owner = owner;
    }

    // Methods => Functions inside a class
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

// main script:
// In Java=> Car car1 = new Car();
const car1 = new Car('Nissan', "SUV", "Demo Version", 4, "Martin Smith");

car1.describeCar();