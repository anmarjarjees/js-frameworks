/* 
Working with promises - Part3 - Async/Await:
********************************************
*/

/*
        Async/Await:
        This concept is common in other programming languages also

        > Synchronous code runs in sequence. 
          - only one task are being executed at a time
          - each operation must wait for the previous one to complete before executing.

        > Asynchronous code runs in parallel. 
          - multiple tasks can be executed at a time
          - an operation can occur while another one is still being processed.

        Async/Await is just a "Syntactic Sugar"* of using "Promises" in JavaScript

        - async and await make promises "easier" to write :-)
        - async makes a function return a Promise
        - await makes a function wait for a Promise
        - Modern way of coding with promises

        * Syntactic sugar is a term for a more concise syntax 
        that provides the same functionality for something that already exists.
*/

/*
    The keyword "async":
    ********************
*/
// Starting with the very basic:
// Instead of going with new Promises and .then() and ... we can just use the keyword "async"
// the syntax
async function anyName() {
    // await // any task to be done
}
/* 
Any function declared with the "async" keyword automatically returns a Promise, 
regardless of the return value within the function.
*/

// Below is just a simple basic function
function checkNumber(x) {
    /*
    if (x % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
    */
    // Ternary Operator: short way :-)
    return x % 2 == 0 ? "Even" : "Odd";
}
console.log(checkNumber(8)); // Even

/* 
Using "async" makes this function returns a promise

Consider the two-case scenarios:
********************************
> If the function returns a value "Even" or "Odd", 
that value is automatically wrapped in a "resolved" Promise.

> If the function throws an error, 
that error is automatically wrapped in a "rejected" Promise.
*/
async function checkValue(x) {
    return x % 2 == 0 ? "Even" : "Odd";
}

// Calling our function "checkValue" normally:
console.log(checkValue(8));

/* 
Sine our function "checkValue" returns a promise,
we can handle the returned Promise using .then():
*/
checkValue(4).then(result => {
    console.log(result); // Output: "Even"
});

// OR:
checkValue(4).then(result => console.log(result)); // Output: "Even"

// Or using the shorthand by stripping all the optional symbols!
checkValue(20).then(console.log); // Output: "Even"

/*
   The keyword "await":
   ********************
   Async and Await both go together :-)
   > The keyword "await" only works inside "async" function
   > "await" will simply pause the code from being running in that specific line 
   till the promise is fulfilled

   In other words, "await" is used to pause the execution of an async function 
   until a Promise is resolved or rejected.
   It is generally used when the right-hand side of the await is a Promise 
   that you want to wait for before continuing.
*/

// Bad Example => Unnecessary use of "await" below!
async function checkValue(x) {
    /* 
    "await" below does nothing useful! 
    Yes, we can be remove it without changing the behavior of the function
    */
    return await x % 2 == 0 ? "Even" : "Odd";
    /*  
    The expression await x % 2 == 0 effectively becomes await true or await false, 
    which makes no sense because await is meant for Promises!
    So using "await" here is unnecessary because it is not dealing with a Promise.
    */
}

/* 
A basic example of using "await"
with our previous function:

Let's try to test the keyword "await",
Creating a "async" function named "test"
this function must has "async"
because we are using await inside it

A simple demonstration about how to use "await" 
to handle the result of a Promise returned by an async function:
*/
async function test() {
    const result = await checkValue(4);
    console.log(result); // Output: "Even"
}

test();

/* 
A better example of using "await" 
to deal with asynchronous operations that return Promises
*/
const url = "https://anmarjarjees.github.io/json-examples/music-inst.json";

// example of fetch(), we will simplify it with async/await :-)
/*
Just by creating a function and adding the keyword "async":

If we use "await" without "async", Error:
'await' expressions are only allowed within async functions and at the top levels of modules.
*/
async function getData(url) {
    // using fetch() but instead of chaining its values with .then(), we will use "await"
    /*
    Now await() stops the fetch() from assigning the returned value to "response",
    until there is a response from the API request to be given.
    Or until the promise from fetch has been fulfilled (resolved)
    */
    const response = await fetch(url);
    /*
    Now we need to deal with response (the returned result),
    we used .then() in the previous code then json() method

    No need for .then() when we have "async" function since we have "await" inside it
    we can use .json() method with another "await" keyword that will also returns a promise
    */
    const data = await response.json();

    // Testing:
    // console.log(data); // (3) [{…}, {…}, {…}]

    // instead of console.log the data,
    // let's return these data so we can use it outside this function
    return data;
}

/* 
In the example above with getData(url) function, 
await is used correctly to pause the execution until the Promises returned by fetch 
and response.json() are resolved.
*/


// Finally: Getting the returned value of "data" from the function getData() 
/*
NOTE:
Because "getData()" is async function, 
any async function returns a promise
we need to use or chain it with .then() as getData() will just return a promise
so .then() will receive as a parameter a callback arrow function by passing the argument "data"
and console it:
*/
// getData().then().catch().finally();
getData(url)
    .then(data => {
        console.log(data);  // (3) [{…}, {…}, {…}]
    })
    // We can continue the chaining with .catch() to catch the errors:
    .catch(err => console.log(`Unable to complete the task: ${err.message}`));

// Just to recap :-) 
// the callback function can also be written without { } as it has only one line:
getData(url).then(console.log).catch(err => console.log(err.message));