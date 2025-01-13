// Another Example from MDN with more...:
/*
We can test and run this file using:
> node script3
Because it doesn't
 have any code relevant to the browser window or document objects
*/
class Rectangle {
    // Class Properties: variables
    // Access Modifiers (Visibility Modifiers): public, private, protected
    // private => # symbol => cannot be accessed outside this class

    // Two private properties:
    /*
     The privacy encapsulation of these class properties is enforced by JavaScript itself.
     Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
    */
    #height;
    #width;

    /*
    Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static#try_it
    */
    static #shape = "Rectangle";
    /*
    The constructor method is a special method 
    for creating and initializing an object created with a class.
    passing h for height and w for width
*/

    constructor(h, w) {
        this.#height = h;
        this.#width = w;
    }

    // ES6: getters and setters as we did in java :-)
    get getHeight() {
        return this.#height;
    }

    get getWidth() {
        return this.#width;
    }

    set setHeight(h) {
        this.#height = h;
    }

    set setWidth(w) {
        this.#width = w;
    }

    // Private method: can only be called inside this class
    #getRecInfo() {
        return (`Width: ${this.#width} and Height: ${this.#height}`);
    }

    // Public method: for calling the private method:
    displayRecInfo() {
        this.#getRecInfo(); // no output
        // console the getRecInfo
        console.log(this.#getRecInfo());
    }

    static printShapeName() {
        /*
        NOTE:
        We cannot access private fields/methods inside a "static" method,
        We will receive the same error as we try to access them outside the class
        Error: Private field '#width' must be declared in an enclosing class.
        */
        // this.#width;
        // this.#getRecInfo();
        /*
        As with "Java", we can access only static fields/methods inside static methods
        The same with JS:
        */
        console.log(`This example is about ${this.#shape}`);


    }

} // class

// main script:
const rec1 = new Rectangle(10, 20);
console.log(rec1.height); // undefined
console.log(rec1.name); // undefined
// Interpreter => on the runtime
// Compiler => Starting from coding

/*
Property '#width' is not accessible outside class 'Rectangle'
because it has a private identifier.
*/
// console.log(rec1.#width);

rec1.displayRecInfo();

// "static" ClassName.MethodName
Rectangle.showRecInfo();