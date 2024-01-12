// Functions:
// The traditional/classical ways to create functions
// Way#1:
function getAverage1(num1, num2) {
    // find and return the average of num1 and num2
    // PEDMAS - BEDMAS
    return (num1 + num2) / 2;
}

function testEvenOddTry1(number) {
    if (number % 2 == 0) {
        document.write(`<p>Your number is ${number}, and it is even.</p>`);
    } else {
        document.write(`<p>Your number is ${number}, and it is odd.</p>`);
    }
}

// Way#2:
let getAverage2 = function (num1, num2) {
    return (num1 + num2) / 2;
}

let testEvenOddTry2 = function (number) {
    if (number % 2 == 0) {
        document.write(`<p>Your number is ${number}, and it is even.</p>`);
    } else {
        document.write(`<p>Your number is ${number}, and it is odd.</p>`);
    }
}

/*
 An arrow function expression is a compact alternative to a traditional function expression,
 but is limited and can't be used in all situations.

 using the "=>"
 */

// ES6: Arrow Functions:

// Arrow Function with () and parameters:
let getAverage3 = (num1, num2) => {
    return (num1 + num2) / 2;
}

let testEvenOddTry3 = (number) => {
    if (number % 2 == 0) {
        document.write(`<p>Your number is ${number}, and it is even.</p>`);
    } else {
        document.write(`<p>Your number is ${number}, and it is odd.</p>`);
    }
}

// Arrow Function with one parameter: no need for ()
let testEvenOddTry4 = number => {
    if (number % 2 == 0) {
        document.write(`<p>Your number is ${number}, and it is even.</p>`);
    } else {
        document.write(`<p>Your number is ${number}, and it is odd.</p>`);
    }
}

let doubleTheValue = value => {
    return value * 2;
}

// Arrow Function without any parameters => ()
let sayHi = () => {
    console.log("Hi");
}

/*
NOTE:
If the function body:
> has one line
> return keyword

we can summarize it by:
> remove the { }
> remove the "return" keyword
*/

// Using the "Ternary" operator:
const isOddOrEven = x => x % 2 == 0 ? "Even" : "Odd";
console.log(isOddOrEven);

/*
Arrow Functions don't rebind "this" to the object itself
*/

const teacher = {
    teach() {
        console.log("the value of keyword this", this); // object
    }
}

teacher.teach();

const instructor = {
    teach: () => console.log("the value of keyword this", this) // window
}

instructor.teach();