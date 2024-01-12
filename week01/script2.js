
/*
   Object as an instance of class:
   *******************************
   - Properties or Attributes => variables declared inside class
   - Methods => functions inside a class
  
    OOP => A PIE  
   
   Object Literals:
   ****************
   An object literal is a list of zero or more pairs of property names
   and associated values of an object, enclosed in curly braces { }

   Any object (class) in any OOP can have two members:
    > Properties: variables inside object
    > Methods: functions inside object
*/

// Creating an object in JS:
const car = {
    // Object Properties:
    brand: 'Toyota',
    year: 2020,
    model: 'SXT',

    // Object Methods:
    drive: function () {
        console.log("Drive Froward!");
    }
} // car

const student = {
    fullName: 'Alex Chow',
    program: 'CMPG',

    // function inside an object is called a method:

    // In JS (ES5) define a method:
    read: function () {
        console.log("Reading JS framework");
    },

    // In (ES6) define a method:
    write() {
        console.log("Writing the assignment");
    }
} // student

/*
in ES5: using the normal way of DOT notation to access the object's members:
*/
student.read();
student.fullName = "Martin Smith";

/*
in ES6: we can also use the bracket notation with properties:
*/
student['fullName'] = "Sam Simpson";

/*
bracket notation can be used if we don't know the property that we need to access:
the property name could a value that we receive from an input form:
*/
const property = 'fullName';
student[property] = 'Kate Wilson';
console.log(student);

// JSON - JavaScript Object Notation Format:
let jsonExample = {
    "brand": "Toyota",
    "year": 2020,
    "model": "SXT"
}
// For validation: https://jsonlint.com/

/*
   The keyword "this" in C#/Java
   always returns a reference to this class object 
   which is a reference to the current object

   But this is not always the case in JS
   */
const student = {
    fullName: 'Alex Chow',
    program: 'CMPG',

    write() {
        console.log(this);
    }
}

student.write();
/*
Object
    fullName: "Alex Chow"
    program: "CMPG"
    write : 
    ƒ write()
*/

// check "write1" and "write2"
/*
This line will also print the object "student" as are calling the write() method;
*/
const write1 = student.write();

console.log("WRITE1:");
console.log(write1); // undefined;
/*
so console.log the keyword "this" => undefined
*/

/*
This line will NOT call the write() method,
will just get a reference to the method "write" of the object student
*/
const write2 = student.write;

// Test:
console.log("WRITE2:");
console.log(write2);
/*
Output:
ƒ write() {
        console.log(this);
}

so our constant "write2" was set to the method (object's function): write()
*/


/*
Now let's try to call the write2() as a function:
*/
write2();
/*
Output:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

In such case the value of "this" keyword refer to the "Window" object
*/

/*
As a conclusion:
The value of this is determined by the way we call our function:
 
way#1: 
> calling the function as a method for an object 
=> returns a reference to the object itself
 
way#2:
> calling the function as a standalone object (not attached to an object) 
=> returns the global object which is the "Window" object of the browser
NOTE: if the strict mode is NOT enabled, otherwise returns "undefined"
*/

/*
In JavaScript, function can act as object
Sp to make the keyword "this" always returns a reference to the object itself,
we can use another method "bind":
 
VScode: 
> For a given function, creates a bound function that has the same body as the original function.
> (method) Function.bind(this: Function, thisArg: any, ...argArray: any[]): any
so whatever we pass to bind() will determine the value of "this" keyword:
bind() method will return a new instance that points to "student" object
*/
const write3 = student.write.bind(student);

console.log("WRITE3:");
console.log(write3);

write3();
/*
output: {fullName: 'Alex Chow', program: 'CMPG', write: ƒ}
*/

/*
so functions in JS can be treated as objects that can have properties and methods
*/