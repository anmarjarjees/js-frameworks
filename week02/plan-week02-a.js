console.log("test");
alert('test');

// Class review
/*
        Classes:
        Classes are a template for creating objects. 
        They encapsulate data with code to work on that data. 
        Classes in JS are built on prototypes but also have some syntax and semantics 
        that are not shared with ES5 class-like semantics.
        Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

        ECMAScript 2015 (ES6) introduced JavaScript Classes.
        JavaScript Classes are templates for JavaScript Objects.

        NOTE ABOUT "Hoisting":
        An important difference between function declarations and class declarations:
        - functions can be called in code that appears before they are defined
        - classes must be defined before they can be constructed, otherwise code will throw a "ReferenceError"

        HINTS: 
        - Hoisting: JavaScript Hoisting refers to the process whereby 
        the interpreter appears to move the declaration of functions, variables or classes 
        to the top of their scope, prior to execution of the code.
        Link: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
        - Please refer to my JavaScript repo for more details about using "Prototypes" and "Constructors" 
        to implement the same idea of Classes which is the way it used to be before ES6 and it's still valid
        */

// Starting with Capital letter by convention
/*
A JavaScript class is not an object itself,
But it is a template (blue print) for JavaScript objects.
This class will be a blue print for a useable object that we are going to create later...
*/
// You can declare a class using the class keyword.
class Car {
    // Always add a method named constructor():
    /*
    constructor() is like a class built-in function that are triggered/called
    when we instantiate an object from this class.
    that's why it can be used to set the initial properties of the class if needed

    Notice that if you do not define a constructor method, JavaScript will add an empty constructor method.
    */
    constructor(brand, type, description, wheels, owner) {
        /*
        The properties of a class = the variables we are passing to the class
        with class properties:
        - We use the keyword "this" that refer to the current object of the class
        - We DO NOT use "const", "let", or "var"

        The class has five initial properties: "brand", "type", "description","wheels", and "owner".

        NOTE: Please be advised that "this" keyword is required to access class methods within the class itself
        */
        this.brand = brand;
        this.type = type;
        this.description = description;
        this.wheels = wheels;
        this.owner = owner;
    }

    /*
    Methods:
    Class can have functions, functions are called "methods" when we create them inside a class.
    We don't use the keyword "function" when we create them
    */
    describeCar() {
        // Don't forget to use the keyword "this" to access any property of a class
        /*
        If you forget to add the keyword "this", for example wheel instead of this.wheel
        JS will will trow this error: 
        Uncaught ReferenceError: wheel is not defined
        */
        document.write(`${this.owner} has ${this.type}. It's ${this.wheel}-wheel drive. This car is ${this.description}`);
    }
} // End class Car

// Creating a new instance (object) of a Car Class:
/*
When we create a new object, we have to follow the constructor function signiture,
which means we should pass the needed values to all the constructor parameters,
If we don't pass any value so why we have these parameter in the constructor,
or why we added our custom constructor if we have no intention to pass any value to the class object?
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

// Our constructor expecting these values with the same order: brand, type, description, wheels, owner
let firstCar = new Car("Toyota", "Sedan", "Good condition with 1 year warranty", 4, "Alex Chow");

console.log(firstCar);
/*
    brand: "Toyota"
    description: "Good condition with 1 year warranty"
    owner: "Alex Chow"
    type: "Sedan"
    wheels: 4
    [[Prototype]]: Object
*/

firstCar.describeCar();

// Creating another instance/object from our class "Car":
/*
    Notice that I am using "let" keyword to declare a variable,
    but it's recommended to use "const" keyword if you have no intention to change its value later
*/
const secondCar = new Car("Nissan", "SUV", "Demo Version", 4, "Martin Smith");
document.write(`<p>${secondCar.owner} is selling his ${secondCar.type} ${secondCar.brand} ${secondCar.wheels}-wheel drive car. It's still in ${secondCar.description}!</p>`);


/*
New Topic:
*/
/*
           Class Inheritance:
           Creating a class that can take all the members (properties, methods) from its parent class.
           This process is called "Extending The Class" which can be done by taking the parent/superclass
           and extend it by customizing it for a specific type of object with the child/subclass 
       */

// Creating the parent class:
class Person {
    /*
    NOTE:
    We can declare the class properties before using them inside the constructor:
    Below we are declaring a property called "name", then assign a value to it: this.name = 
    Please remember it's an optional step so the name; declaration is optional.

    If you omit this optional step, the code line => this.name = name; 
    in the constructor will create the name property before initializing it. 
    However, listing properties explicitly in the class declaration 
    might make it easier for people reading your code to see which properties are part of this class.

    Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
    */
    name; // Declaring the class property before initializing it (Optional Step but good for readability)

    constructor(name) {
        this.name = name;
    }

    greet() {
        document.write(`<br>Hello ${this.name}!`);
    }
}

/*
With class Inheritance, We use the "extends" keyword to say that this class inherits from another class.
This example (class Member) is not useful as nothing has been changed/added, but just for simple demonstration
*/
class Member extends Person {
    // nothing, just an empty class
}

let member1 = new Member("Alex Chow"); // calling the constructor from the parent class/superclass
member1.greet(); // calling the method .greet() from the superclass

// Notice the same code can be written with using the super() function inside a customized constructor:
// super() function is used to pass values to the parent class
// we can use "super" keyword with a method name to access methods from the parent class
// This example (class User) is just to demonstrate the use of super() function in an easy way!
class User extends Person {
    // we need to copy the same constructor function from the parent/superclass
    /*
    In such case, we need to:
    - Creating/Define another constructor that can have the same parameters 
    from the parent/superclass

    - Since the constructor method in the superclass 
    contains the name parameter value to be assigned to a class property this.name 
    so we have to make sure that subclass is doing this step by using the "super()" function.
    The supper inside the subclass are passing the name parameter to the constructor in the parent class
    */
    constructor(name) {
        // using the super() function
        super(name);
        /*
        You can think about super() as we are calling the constructor() function from the parent/superclass
        and passing the value(s) for its required parameter(s)
        */
    }
}

let user1 = new User("Kate Wilson");
let user2 = new User("James Dean");
user1.greet(); // Hello Kate Wilson!
user2.greet(); // Hello James Dean!

// Another example about using super() function
// This will be useless and funny :-)
class Student extends Person {
    /*
    define a customized constructor, but without parameters!!!
    */
    constructor() {
        // using the super() function to call the constructor from the superclass
        /*
        Notice in this example we are hard coding the value of the class property "name" 
        inside the class itself!
        We are passing the literal text value of "Sarah Grayson"
        as fixed hard coded value with giving the option to user another name!
        Check what happens when we create an instance of this class "Student"
        */
        super("Sarah Grayson");
        /*
        You can think about super() as we are calling the constructor() function from the parent/superclass
        and passing the value(s) for its required parameter(s)
        */
    }
}

// In such case, we can just create an instance with the new keyword WITHOUT passing any value (useless)!
let student1 = new Student();
student1.greet(); // Hello Sarah Grayson!

let student2 = new Student("What Happened"); // This argument value "What Happened" will be ignored
student2.greet(); // Hello Sarah Grayson!

let student3 = new Student("Sam Simpson");  // This argument value will "Sam Simpson" be ignored
student3.greet(); // Hello Sarah Grayson!

/*
A better useful example about using Inheritance and super() function
define the Instructor subclass
The "super" keyword used inside a child class denotes its parent class.
*/
class Instructor extends Person {
    /*
        This time we need the subclass/child class to have some other properties to be set 
        besides the "name" property that inherited from the superclass.

        In other word, this class is called "Instructor" so beside the instructor's name property
        we need to have another property for instructor's course
        
        So we can copy the same constructor function from the superclass
        and adding the super() function for the name property
        and adding the assignment for the new property which is for the course name:
    */
    constructor(name, course) {
        super(name); // Now, we are done with required parameter(s) in the superclass

        // Adding the new properties for the subclass
        this.course = course;
    }

    teach() {
        document.write(`<br>My name is ${this.name}, and I will be your "${this.course}" instructor.`);
    }

    /*
    Overriding Method or Property
    If the child/subclass has the same method or property name as that of the parent/superclass, 
    its instance (object) will use the method and property of the child/subclass. 
    In OOP, this concept is called method overriding:
    */
    greet() {
        document.write(`<br>Hello all, my name is ${this.name} and I will be your instructor to teach you using "My Way"!`);
    }
}

let instructor1 = new Instructor("Martin Smith", "Front-End Development");
instructor1.teach();

let instructor2 = new Instructor("Frank Sinatra", "PHP and MySQL Web Development");
instructor2.teach();

instructor2.greet();

document.write("<br><hr><h2>Working with Shapes</h2>");

/*
 - Defining a shape class
 - Has three properties: name1, value1 and value2
 - name: the name of the shape
 - value1 and value2 will be used to find the Perimeter of a Shape
 - value1/value2 will be the length of one side for a rectangle
 - value 1 can be the width of a rectangle, and value 2 can be its length
*/
class Shape {
    name;
    value1;
    value2;

    /*
    Add a constructor to this class. 
    The constructor takes arguments for the name, value1, value2 and initializes them.

    Notice below we set the value2 by default to the value1 ONLY if no value is given/passed
    */
    constructor(name, value1, value2 = value1) {
        this.name = name;
        this.value1 = value1;
        this.value2 = value2;
    }

    /*  
    Add a new method calcPerimeter() method to the class, 
    which calculates its perimeter (the length of the shape's outer edge) 
    and logs the result to the console.
    */
    calcPerimeter() {
        document.write("<br><br>Your shape is: " + this.name); // Yes the classical syntax
        document.write(`<br>The result of the perimeter calculation of ${this.name}:`);
    }

} // End class Shape


/*
Create a new instance of the Shape class called testSquare. 
Give it a name of "square" and a sideLength of 5.
*/
let testSquare = new Shape("Square");
testSquare.calcPerimeter(); // no actual calculation has been done yet:
/*
OUTPUT:
Your shape is: Square
The calculation perimeter of Square:
*/

// Creating another instance of class Shape:
let testRec = new Shape("Rectangle", 5, 7);
testRec.calcPerimeter(); // no actual calculation has been done yet:
/*
OUTPUT:
Your shape is: Rectangle
The result of the perimeter calculation of Rectangle:
*/

// Creating a subclass named "Rectangle" from the superclass "Shape":
class Rectangle extends Shape {
    // We don't need to change/modify/include the constructor with super() function:
    // constructor() {
    //     
    // }

    // We need to override the calcPerimeter() method to add the formula for Rectangle Perimeter
    calcPerimeter() {
        // We still need to output the first two messages from the original method:
        /*
        Besides using super() as a function to refer to the constructor in the superclass,
        It's also a keyword that refer to the superclass itself!

        So access any method from the superclass we can use the syntax:
        super.methodName()
        */
        super.calcPerimeter(); // super keyword with "calcPerimeter()" will just call the calcPerimeter() from the superclass

        // Then we can add our customized code:
        /*
        Rectangle:
        Perimeter = a + b + c + d
        OR:
        Perimeter = 2 × (a + b)
        */
        let perimeter = 2 * (this.value1 + this.value2);
        document.write(`<br>The width is ${this.value1} and the length is ${this.value2}, so the perimeter is: ${perimeter}`);
    }
}


document.write("<h2>Working with Rectangle subclass of Shape superclass</h2>");
let myRectangle1 = new Rectangle("Rectangle", 5, 7);
// for testing:
console.log(myRectangle1);
myRectangle1.calcPerimeter();


let myRectangle2 = new Rectangle("Rectangle", 10, 17);
// for testing:
console.log(myRectangle2);

myRectangle2.calcPerimeter();

// Creating a subclass named "Square" from the superclass "Shape":
class Square extends Shape {
    // We don't need to change/modify/include the constructor with super() function:
    // constructor() {
    //     
    // }

    // We need to override the calcPerimeter() method to add the formula for Square Perimeter
    calcPerimeter() {
        super.calcPerimeter();
        // Then we can add our customized code:
        /*
        Perimeter = 4 × a
        a = length of side
        */
        let perimeter = this.value1 * 4;
        document.write(`<br>The side length is ${this.value1}, so the perimeter is: ${perimeter}`);
    }
}

document.write("<h2>Working with Square subclass of Shape superclass</h2>");
let mySquare1 = new Square("Square", 3);
// for testing:
console.log(mySquare1);
mySquare1.calcPerimeter();

let mySquare2 = new Square("Square", 9);
mySquare2.calcPerimeter();

// Creating a subclass named "Triangle" from the superclass "Shape":
class Triangle extends Shape {
    // We need to modify the constructor as the Triangle has 3 sides so we need 3 values 
    // Our original constructor in the superclass can accept two values only
    // So we need to add only one
    constructor(name, a, b, c) {
        super(name, a, b);
        this.value3 = c;
    }

    // We need to override the calcPerimeter() method to add the formula for Triangle Perimeter
    calcPerimeter() {
        super.calcPerimeter();
        // Then we can add our customized code:
        /*
        Triangle:
        Perimeter = a + b + c
        */
        let perimeter = this.value1 + this.value2 + this.value3;
        document.write(`<br>The side lengths are:  ${this.value1}, ${this.value2}, and ${this.value3}. the perimeter is: ${perimeter}`);
    }
}

document.write("<h2>Working with Triangle subclass of Shape superclass</h2>");
let myTriangle1 = new Triangle("Triangle", 3, 6, 7);
// for testing:
console.log(myTriangle1);
/*
Triangle {name: 'Triangle', value1: 3, value2: 6, value3: 7}
name: "Triangle"
value1: 3
value2: 6
value3: 7
*/
myTriangle1.calcPerimeter();

let myTriangle2 = new Triangle("Triangle", 9, 8, 5);
myTriangle2.calcPerimeter();

/*
new topic
*/
// Another Example from MDN with more...:
class Rectangle {
    /*
        The constructor method is a special method 
        for creating and initializing an object created with a class.

        passing h for height and w for width
    */
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }

    // Method:
    // Creating our custom method (In-Class Function) to return the area of a rectangle:
    /*
    We can name it calcArea for "Calculate Area"
    Notes:
    - No need to pass any parameters for the width and height
    as this method will use the class properties (width and height) that we already set 
    inside the constructor method 
    - Don't forget to use "this" keyword with the class properties
    */
    calcArea() {
        return this.height * this.width;
    }

    // Getter: for getting the value of the rectangle area:
    /*
    IMPORTANT NOTE:
    Please notice that even "area()" is the getter method,
    we don't use parentheses when we want to get the property value
    */
    get getHeight() {
        return this.height;
    }

    get getWidth() {
        return this.width;
    }

    // Setter: for setting a value for any class property
    set setHeight(h) {
        this.height = h;
    }

    set setWidth(w) {
        this.width = w;
    }

    /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static#try_it
    */
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }


    /*
Private properties
Private properties are counterparts of the regular class properties which are public, including class fields, class methods, etc. Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class. The privacy encapsulation of these class properties is enforced by JavaScript itself.
    */
    #privateField;
    #privateFieldWithInitializer = 42;
} // End class Rectangle

// creating a new instance:
const rec1 = new Rectangle(10, 20);
// Since we can access calcArea() so we can use it:
document.write(`<p>The area of the first rectangle is ${rec1.calcArea()}</p>`);
// The area of the first rectangle is 200

// Override the rectangle properties values for width and height:
rec1.setHeight = 12;
rec1.setWidth = 7;
document.write(`<p>The new area of the first rectangle after changing its width and height is ${rec1.calcArea()}</p>`);

// Or with using the getter:
// This code will throw an error as we cannot use () with get methods:
// Uncaught TypeError: rec1.area is not a function
// let recArea = rec1.area();

// We have to use the getter method without ()
let recArea = rec1.area;
document.write(`<p>The new area of the first rectangle after changing its width and height is ${recArea}</p>`);
