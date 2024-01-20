// Another extra example for inheritance:

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
        // The classical syntax
        console.log("Your shape is: " + this.name);
        console.log(`The result of the perimeter calculation of ${this.name}:`);
    }
} // End class Shape

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

        // super keyword with "calcPerimeter()" will just call the calcPerimeter() from the superclass:
        super.calcPerimeter();

        // Then we can add our customized code:
        /*
        Rectangle:
        Perimeter = a + b + c + d
        OR:
        Perimeter = 2 × (a + b)
        */
        let perimeter = 2 * (this.value1 + this.value2);
        console.log(`The width is ${this.value1} and the length is ${this.value2}, so the perimeter is: ${perimeter}`);
    }
} // class Rectangle

// Creating a subclass named "Square" from the superclass "Shape":
class Square extends Shape {

    // We need to override the calcPerimeter() method to add the formula for Square Perimeter
    calcPerimeter() {
        super.calcPerimeter();
        // Then we can add our customized code:
        /*
        Perimeter = 4 × a
        a = length of side
        */
        let perimeter = this.value1 * 4;
        console.log(`The side length is ${this.value1}, so the perimeter is: ${perimeter}`);
    }
} // class Square

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
        console.log(`\nThe side lengths are:  ${this.value1}, ${this.value2}, and ${this.value3}. the perimeter is: ${perimeter}`);
    }
}

// Main Script:
// Example#1:
console.log("\nWorking with Rectangle subclass of Shape superclass");
let myRectangle1 = new Rectangle("Rectangle", 5, 7);
// for testing:
console.log(myRectangle1);
myRectangle1.calcPerimeter();


let myRectangle2 = new Rectangle("Rectangle", 10, 17);
// for testing:
console.log(myRectangle2);

myRectangle2.calcPerimeter();

// Example#2:
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

// Example#3:
console.log("\nWorking with Square subclass of Shape superclass");
let mySquare1 = new Square("Square", 3);
// for testing:
console.log(mySquare1);
mySquare1.calcPerimeter();

let mySquare2 = new Square("Square", 9);
mySquare2.calcPerimeter();

// Example#4:
console.log("\nWorking with Triangle subclass of Shape superclass");
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