// Working with promises - Part3 - Async/Await:
/*
        Async/Await:
        This concept is common in other programming languages

        > Synchronous code runs in sequence. 
          - only one task are being executed at a time
          - each operation must wait for the previous one to complete before executing.

        > Asynchronous code runs in parallel. 
          - multiple tasks can be executed at a time
          - an operation can occur while another one is still being processed.

        Async/Await is just a syntactic sugar* of using Promises in JavaScript

        - async and await make promises easier to write"
        - async makes a function return a Promise
        - await makes a function wait for a Promise

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

// Below is just a simple basic function
function checkNumber(x) {
    return x % 2 == 0 ? "Even" : "Odd";
}
console.log(checkNumber(8)); // Even

async function checkValue(x) {
    return x % 2 == 0 ? "Even" : "Odd";
}
console.log(checkValue(8));

/*
   The keyword "await":
   ********************
   Async and Await both go together :-)
   > The keyword "await" only works inside "async" function
   > "await" will simply pause the code from being running in that specific line 
   till the promise is fulfilled
   */

const url = "https://anmarjarjees.github.io/json-examples/music-inst.json";

// example of fetch(), we will simplify it with async/await :-)
/*
Just by creating a function and adding the keyword "async":

If we use "await" without "async", Error:
'await' expressions are only allowed within async functions and at the top levels of modules.
*/
async function getData() {
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
getData()
    .then(data => {
        console.log(data);  // (3) [{…}, {…}, {…}]
    })
    // We can continue the chaining with .catch() to catch the errors:
    .catch(err => console.log(`Unable to complete the task: ${err.message}`));

// Just to recap :-) 
// the callback function can also be written without { } as it has only one line:
getData().then(console.log).catch(err => console.log(err.message));