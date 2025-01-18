/* 
Working with promises - Part3 - Async/Await:
********************************************
*/

/* 
    Async/Await:
    ************ 
    - Async/await is a "syntactic sugar"* that makes writing asynchronous code easier and more readable by allowing code to be written in a synchronous style while still performing non-blocking operations.

    - The concept of async/await is common in many programming languages, 
    including JavaScript, Python, and C#.

    - async and await simplify working with Promises by providing a more readable and straightforward way to handle asynchronous operations compared to using raw Promises and .then() chains:
        > async makes a function return a Promise, even if it doesn't explicitly return one.
        > await pauses the execution of an async function until the Promise it's waiting for is resolved or rejected.

    * Syntactic Sugar:
    - Refers to syntax that is designed to make code easier to write and read while providing the same functionality as an existing feature. 
    - It simplifies complex operations or constructs without changing their underlying behavior.
*/

/*
    The Keyword "async":
    ********************
    The "async" keyword is used to declare an asynchronous function.
    - An "async" function always returns a "Promise".
    - If the function returns a value, that value is automatically wrapped in a "Promise".
    - If the function throws an error, the error is returned as a rejected "Promise".

    Example Syntax for an "async" Function:
*/

// The "async" function below will always return a Promise.
async function anyName() {
    /* 
    Consider the following notes:
    - Inside an "async" function, we can use "await" 
    - "await" for waiting until a Promise is resolved or rejected
    */

    // Example of using await with a Promise (commented out for now):
    // await somePromise; // Pauses execution until somePromise is resolved or rejected.
    // Code execution continues after the Promise is settled
    // Any code here will run after "somePromise" resolves or rejects
}
/* 
Any function declared with the "async" keyword automatically returns a Promise, 
regardless of the return value within the function.
*/

// Below is just a simple basic function for checking even or odd numbers
function checkNumber(x) {
    // The if-else version of the code could be written like this (normal block):
    /*
    if (x % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
    */
    // Or using the "Ternary Operator" (short way) :-)
    return x % 2 == 0 ? "Even" : "Odd";
}
console.log(checkNumber(8)); // Output: Even

/* 
Consider the two-case scenarios:
********************************
> If the function returns a value, such as "Even" or "Odd", 
that value is automatically wrapped in a resolved Promise.

> If the function throws an error, 
that error is automatically wrapped in a rejected Promise.
*/

// Async function that returns a value and wraps it in a Promise
async function checkValue(x) {
    return x % 2 == 0 ? "Even" : "Odd";
}

// Calling our function "checkValue" normally:
console.log(checkValue(8)); // Output: Promise {<resolved>: "Even"}

/* 
Since our function "checkValue" returns a promise,
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
   The Keyword "await":
   ********************
   "async" and "await" work together to simplify asynchronous code.
   > The keyword "await" only works inside async functions.
   > "await" pauses the execution of the async function at that specific line 
     until the Promise it is waiting for is fulfilled.

   In other words, "await" is used to pause the execution of an async function 
   until a Promise is resolved or rejected. It is generally used when the 
   right-hand side of the `await` expression is a Promise that you want to wait 
   for before continuing.
*/

// BAD Example => Unnecessary use of "await" below!
async function checkValue(x) {
    /* 
   The use of "await" here is unnecessary.
   Since "x % 2 == 0" is not a Promise, using "await" has no effect 
   and can be removed without changing the behavior of the function.

   Warning Message: 'await' has no effect on the type of this expression.
   */
    return await (x % 2 == 0 ? "Even" : "Odd");
    /*  
    The expression "x % 2 == 0" effectively becomes either/or:
    > await true 
    > await false
    which is not meaningful! Because "await" is meant for Promises, 
    not for immediate values like boolean expressions!
    */
}

/* 
A Basic Example of Using "await" 
with Our Previous Function:

Let's test the keyword "await" by creating an async function named "test".
This function must be declared as "async" because we are using "await" inside it.

This example demonstrates how to use "await" to handle the result of a Promise 
returned by the async function "checkValue":
*/
async function test() {
    // Using "await" to pause execution until "checkValue(4)" resolves
    const result = await checkValue(4);
    console.log(result); // Output: "Even"
}

// Call the async function "test"
test();

/* 
A Better Example of Using "async" and "await"  
to Handle Asynchronous Operations Returning Promises
*/
const url = "https://anmarjarjees.github.io/json-examples/music-inst.json";

// Example of fetch(), simplified with async/await
/*
- By creating an async function and using "await", we can handle asynchronous operations more cleanly.
- Using "await" outside of an async function will result in an error:
'await' expressions are only allowed within async functions and at the top levels of modules.
*/
async function getData(url) {
    // Using fetch() but instead of chaining its values with .then(), we will use "await"
    /*
    await() stops the fetch() from assigning the returned value to "response",
    until there is a response from the API request.
    Or until the promise from fetch has been fulfilled (resolved).
    */
    // Fetch data from the given URL
    // "await" pauses execution until fetch() resolves
    const response = await fetch(url); // Pauses until the fetch request completes
    /*
    Now we need to handle (deal with) the response (the returned result),
    we used .then() in the previous code examples with json() method
    
    No need for .then() when we have "async" function since we have "await" inside it
    We can use .json() method with another "await" keyword that will also return a promise.

    So, instead of chaining .then(), we can just use "await" again to get the response body as JSON:
    */
    const data = await response.json(); // Pauses until response.json() resolves

    // Testing:
    // console.log(data); // (3) [{…}, {…}, {…}]

    // Instead of logging the data,
    // let's return these data so we can use it outside this function.
    return data;
}

/* 
In the example above with "getData(url)", "await" is used correctly to pause execution 
until the Promises returned by fetch() and response.json() are resolved.
This makes handling asynchronous operations cleaner and more readable.
*/

// Finally: Getting the returned value of "data" from the function getData() 
// *************************************************************************
/*
NOTE:
Because "getData()" is an async function, 
any async function returns a promise.
We need to use or chain it with .then() as getData() will just return a promise.
So .then() will receive as a parameter a callback arrow function by passing the argument "data"
and log it:
*/
// Remember the template => getData().then().catch().finally();
getData(url)
    .then(data => {
        // Output of console.log will be the parsed JSON object
        console.log(data);  // (3) [{…}, {…}, {…}]
    })
    // We can continue the chaining with .catch() to catch errors:
    .catch(err => console.log(`Unable to complete the task: ${err.message}`));

// Just to recap :-) 
// The callback function can also be written without { } as it has only one line:
getData(url).then(console.log).catch(err => console.log(err.message));

/*
Real world scenario:
********************
The console window is for us as programmers to test our code and log the data,
but our clients expect to see the content in the document! 
We need to manipulate the DOM to display it.

Consider the following two solutions:
*/

// First Try: 
/*
Bad way of coding for two reasons:
1) We are using 3 lines of code for printing three elements. What if we have 25 elements?
    > We should use a loop structure instead.
2) The method document.write() will override the entire content of the page every time we use it! So we will only see the last element "Ukulele".
    > It's better to use DOM manipulation with getElementById() to insert content more efficiently.
*/

// Notice that these lines of code would overwrite the page content:
// getData(url).then((data) => document.write("<br>" + data[0].name)); // Piano
// getData(url).then((data) => document.write("<br>" + data[1].name)); // Guitar
// getData(url).then((data) => document.write("<br>" + data[2].name)); // Ukulele

// A better solution: Use a loop and DOM manipulation to display all items dynamically:
getData(url).then(data => {
    let ulElement = "<ul>"; // Start an unordered list
    data.forEach(element => {
        // document.write("<br>" + element.name);
        // document.getElementById("instruments").innerText = element.name;
        ulElement += "<li>" + element.name + "</li>"; // Add each item as a list element
    });
    ulElement += "</ul>"; // Close the unordered list
    // Insert the list into the HTML:
    document.getElementById("instruments").innerHTML = ulElement;
}); 
