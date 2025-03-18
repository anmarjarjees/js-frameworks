/* 
Working with Promises - Part 1: The Basics
*******************************************
*/

// Before diving into the concept of "Promises", let's review again "anonymous functions"
// ES6 introduced arrow functions as a shorter syntax for anonymous functions

// Examples of arrow functions (For reviewing):
// ********************************************
// Basic Simple Normal Function :-)
function sub(x, y) {
    return x - y;
}

// Basic Anonymous (no-name) and Arrow function with no parameters
() => {
    console.log('No parameters');
}

// Anonymous and Arrow function with no parameters
(x, y) => {
    return x + y;
}

// Anonymous and Arrow function with one parameter
// we can omit the () since we have only one parameter
x => {
    return x * x;
}

// Arrow function with two parameters
let add = (x, y) => {
    return x + y;
}

// Anonymous arrow function accepting two parameters
(x, y) => {
    return x * y;
}

// Anonymous arrow function accepting one parameter [parentheses can be omitted]
x => {
    return x * x;
}

/* 
Notice the following:
- if the function has one statement, we can omit the { } (as usual)
- arrow function can implicitly return a value without "return" if there is no { }
*/
let div = (x, y) => x / y;


/*
JavaScript (JS) was originally designed as a "single-threaded", 
"synchronous" language.

In plain English, JS executes code one task at a time, meaning each task 
must be finished before moving on to the next.

- Synchronous Code:
    > Runs sequentially.
    > Only one task is executed at a time.
    > Each operation must complete before the next one starts.

- Asynchronous Code:
    > Can run in a non-blocking manner.
    > Multiple tasks can be initiated without waiting for others to complete.
    > Allows other operations to proceed while waiting for tasks to finish.

- Key Points to Note:
*********************
- Asynchronous code does not necessarily run tasks in parallel; 
it simply allows other code to run while waiting for operations to complete.

Promises in JS are a tool to work with "asynchronous operations".

To summarize:
*************
> Asynchronous Operation:
An operation that takes time to complete and doesn't finish immediately. 
Examples include fetching data from a server or reading a file.

> Promise:
A promise is an object that represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value. When we create a promise, 
we're indicating that we're working on something and will notify when it's done.
*/

/* 
Let's explore how JavaScript handled asynchronous operations before Promises.

To Review "Callback":
*********************
A "callback" in JavaScript:
> is a function passed as an argument to another function
> this function is executed after the completion of a task, allowing for asynchronous operations

using "callbacks". We'll use:
> A callback function
> "setTimeout()" to simulate delaying the execution of a function

The term "Callback":
A callback is a function passed as an argument to another function. It is 
invoked after the completion of some operation.
*/

// Creating a function named "callback" to output a message
function callback() {
    // Using console to display a message after the timeout
    console.log('Time is completed for the current task after 3 seconds!');
}

/*
Note: In Node.js, setTimeout() is part of the environment.
In a browser, setTimeout() is part of the "window" object:
- setTimeout()
- or window.setTimeout()

Syntax:
setTimeout(function, delay)
- function: The function to be executed after the delay.
- delay: Time to wait before executing the function, in milliseconds.
*/

// Using setTimeout to delay the execution of "callback()" by 3 seconds
setTimeout(callback, 3000); // 3 seconds (1 second = 1000 milliseconds)

// Using an arrow function with setTimeout
setTimeout(() => {
    // Using console to display a message after the timeout
    console.log('Good After 4 seconds of waiting, here is the result: everything is done perfectly!');
}, 4000); // 4 seconds

/*
Using setTimeout() for multiple tasks can lead to complex, nested code.

ES6 introduced "promises" to simplify handling asynchronous operations.

The idea of "promises":
A Promise is a cleaner alternative to callbacks.
It represents the eventual completion or failure of an asynchronous operation.

A promise allows attaching callbacks for handling success or failure,
instead of passing callbacks into functions.

For more information about promises, check out these resources:
- Link: https://javascript.info/promise-basics
- Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- Link: https://www.w3schools.com/js/js_promise.asp
*/

/* 
Promises: Promise Class
***********************
> The Promise constructor takes a function as an argument.
> This function, known as the "executor," lets us resolve or reject a promise manually.
> The function accepts two parameters: resolve and reject (by convention).
> These parameters indicate the completion or failure of the asynchronous operation.

Resolved / Rejected:
*/

// The constructor syntax for a promise object "promiseObj":
// First: Declare our promise function:
function promiseFun(resolve, reject) {
    // write your code to handle both results: resolved or rejected
}

// Then: Passing the function:
let promiseObj = new Promise(promiseFun);

// OR in one shot :-)
// Constructor syntax for a promise object "promiseObj1":
let promiseObj1 = new Promise(function (resolve, reject) {
    // executor (the producing code, "singer")
});

// Constructor syntax with arrow function
let promiseObj2 = new Promise((resolve, reject) => {
    // executor (the producing code, "singer")
});

console.log(promiseObj2); // Promise { <pending> }

/*
NOTES:
******
1. The arguments "resolve" and "reject" are callbacks 
   provided by JavaScript. Our code runs inside the executor function.

2. "Resolve" and "reject" are just conventional names for these function parameters.
   They can be named differently, e.g., new Promise((x, y) => { ... })

3. JavaScript uses:
> The first parameter for the resolve
> The second parameter for the reject

Basic Template from W3Schools:
Link: https://www.w3schools.com/js/js_promise.asp
*/

/* 
A simple example of "promises" with ordering a pizza :-)
When we order a pizza, we don't get it immediately!
> Restaurant says, "We'll get it to you in 10 - 15 minutes." This is like a "promise"

Promise states:
> Pending: While we are waiting, the pizza is being prepared
Then:
> Fulfilled: The pizza is ready, and we're happy :-)
> Rejected: If there's a problem, we are not happy :-(

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description
*/

// STEP#1: Creating the Promise object:
// pass an anonymous arrow function => Executer Function
let pizzaOrder = new Promise((resolve, reject) => {
    // action/task to be done => preparing the pizza
    let pizzaReady = true; // Checks if the pizza is ready
    if (pizzaReady) {
        // Resolve the promise with the message "Pizza is ready!"
        // Resolve the promise => using our resolve() function
        // We can pass anything to promise()
        resolve("Pizza is ready!");
    } else {
        // Reject the promise with the message "Pizza is not ready yet."
        // (parameter) reject: (reason?: any) => void
        // We can pass anything to reject()
        reject("Pizza is not ready yet.");
    }
});

/* 
Promise Code Explanation: 
*************************
> Creating a new Promise object "pizzaOrder"
> The Promise constructor takes an arrow function as an argument
> This arrow function is called the "Executor Function"
> The executor function has two parameters: resolve and reject (by convention)
> resolve and reject are functions provided by JavaScript to handle the promise outcome
> resolve is called when the promise is successful, and reject is called when there's an error
*/

// STEP#2: Calling the promise object with its methods [then().catch().finally()]
/*
 A Promise object serves as a link between the executor "new Promise((resolve, reject) => { }"
 and the consuming functions, which will receive the result or error. 
 Consuming functions can be implemented using the methods .then and .catch.   
 
 The syntax for .then is:
 promise.then(
     function(result) { 
         // handle a successful result 
     },
     function(error) { 
         // handle an error 
     }
 );
 
 OR using the Arrow ES6 syntax (like Lambda expression):
 promise.then(
     (result) => { 
         // handle a successful result 
     },
     (error) => { 
         // handle an error 
     }
 );
 */

/* 
Chaining the methods:
*********************
We can use .then().catch() chaining methods:
> .then() method handles the fulfilled promise
> .catch() method handles the rejected promise
*/

// pizzaOrder.then( (resolvedMsgArg)=>{} ).catch( (rejectedMsgArg)=>{});
pizzaOrder.then(message => {
    console.log(message); // Runs if the pizza was ready
}).catch(error => {
    console.log(error); // Runs if there was an issue with the pizza
});
/* 
Promise Result Code Explanation:
- method .then()
    > Used to handle the successful outcome of a promise
    > When the promise is resolved, the function provided to .then() is executed
    > Syntax: .then(onFulfilled)
    onFulfilled is a callback function that receives the promise result 
    (value passed to resolve)

- method .catch()
    > Used to handle the case where a promise is rejected
    > When the promise is rejected, the function provided to .catch() is executed
    > Syntax: .catch(onRejected)
    onRejected is a callback function that receives the reason for the rejection 
    (value passed to reject)
*/

/*
IMPORTANT NOTE: 
- If interested only in successful completions 
  (The resolve function), 
  we can provide only one function argument to ".then()":
- If there is no function to handle the reject case,
  JS will throw the same red error: Uncaught (in promise) Failed to get A+
*/

// First: Using "null":
agePromise.then(
    // Ignoring the first function (resolve) => null 
    null,
    // Function for handling errors
    error => {
        console.log(`Inside .then() method = Rejected Promise => ${error}`);
    }
);

// Second: Using "catch()":
// catch() handles only the rejection case
// It's a shorthand for .then(null, f), focusing solely on rejection.
agePromise.catch(
    error => {
        console.log(`Inside .catch() method = Rejected Promise => ${error}`);
    }
);


/*
Let's take another simple example:
a promise from a student to get a high average value 
(A+ => 90 or more) for his/her two exams
*/

// STEP#1: 
const highAvg = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (successful or failed)
    // Change the value to see both resolve and reject 
    let exam1 = 91;
    let exam2 = 90;
    let avg = (exam1 + exam2) / 2;
    if (avg >= 90) {
        // Resolve the promise (Successful) with the message "Passing with A+"
        resolve("Passing with A+"); // Using double quotes 
    } else {
        // Reject the promise (Failed) with the message "Failed to get A+"
        reject('Failed to get A+'); // Using single quote
    }
});

// Calling our promise object
// Test:
console.log(highAvg);
/*
Notice that JS will throw an error as "Uncaught (in promise) Failed to get A+"
But this can be avoided by using:
> Either .then() clause
> Or .catch() clause

.then(cb1,cb2):
- cb1 => callback function to be run if the promise is "resolved"
- cb2 => callback function to be run if the promise is "rejected"
.then (
    ()=>{},
    ()=>{}
)
*/

highAvg.then(
    // The first function (result) will be executed with "resolve"
    // Function for the resolved promise => (result) => { ... } 
    (result) => {
        // Output:
        console.log(`Inside .then() method = Resolved Promise => ${result}`);
    },
    // The second function (error) will be executed with "reject"
    // Function for the rejected promise => (error) => { ... }
    (error) => {
        // Output:
        console.log(`Inside .then() method = Rejected Promise => ${error}`);
    }
);

// Another example :-)
let agePromise = new Promise((resolve, reject) => {
    let age = 20;
    if (age >= 18) resolve(`Age is ${age}, you can apply`);
    else reject(`Age is ${age}, you cannot apply`);
});

agePromise.then(
    // The first function (result) will be executed with "resolve"
    result => {
        // handle a successful result 
        console.log(result);
    },
    // The second function (error) will be executed with "reject"
    error => {
        // handle an error 
        console.log(error);
    }
);

// For better understanding, let's use promise => then => catch:
// Promise to check if the number is even:
const myPromise = new Promise((myResolve, myReject) => {
    let num = 7;
    if (num % 2 === 0) {
        // Resolve the promise for an even number
        myResolve(`The number ${num} is even`);
    } else {
        // Reject the promise for an odd number
        myReject(`The number ${num} is odd`);
    }
});

myPromise.then(
    // Function for the resolved promise
    passMsg => {
        console.log("Ok, promise achieved! " + passMsg);
    }
).catch(
    // Function for the rejected promise
    failMsg => {
        console.log("No, promise not achieved! " + failMsg);
    }
).finally(
    // Always runs regardless of the promise outcome
    () => {
        console.log("Well done!");
    }
);

/* 
Functions can return a promise!
*******************************
*/
// Example 1: Basic:
function makePizza() {
    return new Promise((resolve, reject) => {
        // action/task to be done => preparing the pizza
        let pizzaReady = false;
        if (pizzaReady) {
            resolve("My pizza is ready :-)");
        } else {
            reject("Pizza is not ready yet.");
        }
    });
}

// you can complete it... :-)
makePizza().then().catch();

// Example 2: Another Basic:
function fetchData() {
    return new Promise((res, rej) => {
        /*
         Code that needs time to be accomplished:
         - Fetching an API
         - Getting data from a database 
         - Reading and loading a file
         */
        res("The data");
        rej("No Data");
    });
}

// Calling our function fetchData():
fetchData()
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });

// Example 3: Using Try-Catch:
function getData() {
    return new Promise((res, rej) => {
        try {
            /*
            Code that needs time to be accomplished:
            - Fetching an API
            - Getting data from a database 
            - Reading and loading a file
            */
            res("The data");
        } catch (error) {
            rej("No Data");
        }
    });
}

// Calling our function getData():
getData()
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });