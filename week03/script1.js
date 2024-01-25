// Working with promises - Part1 - The Basics:
/*
JavaScript was originally designed to work as a "single-threaded",
"synchronous" language. 

JS can run one thing at a time,
meaning it executes code in order so one task or step runs after another step, 
and each task or piece of code must be finished executing before moving onto the next.

Callbacks:
To review: In callback, one function is passed to another function as an argument.

Promises in JS help us to work/deal with an asynchronous operation. 
*/

// Creating a function named "callback" to just simply output a message
function callback() {
    // using console for quick test:
    console.log('Time is completed for the current task after 3 seconds!');
}

/*
Notice if we want to run setTimeout() using nodeJS, 
NodeJs will provide its own implementation of the times methods

While setTimeout() for the browser belongs to the "window" object:
- setTimeout()
- or window.setTimeout()

The syntax:
setTimeout( [function] , [Time in Milliseconds] )
- [function] => either calling a function or just using AnonymousFunction/ArrowFunction
- [Time in Milliseconds] => the delay => how long to wait after loading the page to run/call the function
*/

// Since this task my take/need some time to finish let's say 3 seconds
// so JS should run the "callback()" function to display the message after 3 seconds
setTimeout(callback, 3000); // 3 sec => 1 Second = 1000 Milliseconds

// ES6: Anonymous functions: function ()
// Arrow function

// To recap/review: let's try using tha arrow (anonymous) function:
/*
() => {

}

(x,y) => {
return x+y;
}

x => {
    return x*x;
}
*/
setTimeout(() => {
    // using console for quick test:
    console.log('Good After 4 seconds of waiting, here is the result: everything is done perfectly!')
}, 4000); // 4 sec

/*
When we have multiple tasks to finish, using setTimeout() could become more complicated!
And we can have multiple nested lines of code depending on how many task to finish.
So with ES6, we have the new concept called "promises"!

The idea of "promises":
A Promise is a cleaner version of callbacks (Common development pattern)
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

It's a very nice example about promises
Link: https://javascript.info/promise-basics

Essentially, a promise is a returned object to which you attach callbacks, 
instead of passing callbacks into a function.

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
Link: https://www.w3schools.com/js/js_promise.asp
*/

// Promises: Promise Class:
// Resolved / Rejected 
// The constructor syntax for a promise object "promiseObj1":
// The function passed to new Promise is called the executor. 
let promiseObj1 = new Promise(function (resolve, reject) {
    // executor (the producing code, "singer")
});

let promiseObj2 = new Promise((resolve, reject) => {
    // executor (the producing code, "singer")
});
console.log(promiseObj2); // Promise { <pending> }

/*
NOTE:
The arguments "resolve" and "reject" are "callbacks" 
provided by JavaScript itself. Our code is only inside the executor.
        
NOTE:
Don't forget that "resolve" and "reject" in our example below are just a function arguments, 
so don't be confused thinking that we have to use the same keyword "resolve" and "reject"!
It's just by convention, so we can use:
- new Promise((x, y) => { ... }
- new Promise((a, b) => { ... }

But JS will use:
> The first parameter (whatever name you give it) for the resolve 
> The second parameter (whatever name you give it) for the reject

Please refer to my JS repos if you need any review in using functions

Basic Template from W3schools:
Link: https://www.w3schools.com/js/js_promise.asp
*/

/*
Let's take a simple example:
a promise from a student to get a high average value 
(A+ => 90 or more) for his/her two exams
*/

// Similar to Java "Anonymous" class
// ClassName objName = new ClassName() { ... }
const promise = new Promise((resolve, reject) => {
    // Change the value to see both resolve and reject 
    let exam1 = 91;
    let exam2 = 90;
    let avg = (exam1 + exam2) / 2;
    if (avg >= 90) {
        // Resolve the promise => using our resolve() function
        resolve("Passing with A+"); // using double quotes 
    } else {
        // Reject the promise => using our reject() function
        reject('Failed to get A+'); // or single quote
    }
});

// Calling our promise object
// Test:
console.log(promise);
/*
Notice that JS will throw this error as JS error code in red color: Uncaught (in promise) Failed to get A+
But we can avoid this error by using:
> Either .then() clause
> Or .catch() clause
        
as you will learn below :-)
*/

// .then() method of the Promise class
// takes two functions as parameters
// fun1 => resolve, fun2 => reject
promise.then(
    // accepts two functions:
    (result) => {
        // basic output:
        // console.log(result); // Passing with A+

        // longer one:
        console.log(`Inside .then() method = Resolved Promise => ${result}`);
    },
    (error) => {
        // basic output:
        // console.log(error); // Failed to get A+

        // longer one:
        console.log(`Inside .then() method = Rejected Promise => ${error}`);
    }
);

/*
IMPORTANT NOTE: 
- If we're interested only in successful completions 
ONLY (The resolve function), 
then we can provide only one function argument to ".then()":
- since there is no second function to handle the reject in the example below,
JS will throw again the same red code error: Uncaught (in promise) Failed to get A+
*/

// First: Let's try using "null":
promise.then(
    // The first function is ignored/skipped => null 
    null,
    // The second function (error) (it's the only function) will be executed with "reject" 
    error => {
        console.log(`Inside .then() method = Resolved Promise => ${error}`);
    }
);

// in ES6 to recap:
// anonymous arrow function that accept two parameters
(x, y) => {
    return x * y;
}

// anonymous arrow function that accept one parameter [we can omit the()]
x => {
    return x * x;
}

// Second: Let's try using "catch()":
// Notice that catch() will only deal with the reject option
// as it is just a complete analog of .then(null, f), it's just a shorthand.
// Attaches a callback for "only" the rejection of the Promise.
promise.catch(
    error => {
        console.log(`Inside .catch() method = Rejected Promise => ${error}`);
    }
);

// For "better understanding" :-) let's take another example:
// use promise => then => catch:
// Promise to give you only even numbers:

const myPromise = new Promise((myResolve, myReject) => {
    let num = 7;
    if (num % 2 == 0) {
        // when successful: => even number
        myResolve(`The number ${num} is even`);
    } else {
        // when error: => odd number
        myReject(`The number ${num} is odd`);
    }
});

// Chaining the methods:
// We can use .then().catch() chaining methods:
myPromise.then(
    // only one function for the resolved promise
    passMsg => {
        console.log("Ok, promise achieved! " + passMsg);
    }
).catch(
    // will handle the rejected promise
    failMsg => {
        console.log("No, promise not achieved! " + failMsg);
    }
).finally(
    // always run
    () => {
        console.log("Well done!")
    }
)

// functions can return a promise!
function anyName() {
    return new Promise((res, rej) => {
        /*
             Here we can write our code that needs time to be accomplished
             for example:
             - Fetch an API
             - Get Data from Database 
             - Reading and loading a file I/O
           */
        res();
        rej();
    })
}

