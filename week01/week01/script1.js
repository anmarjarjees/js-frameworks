// Promise:
/* 
A simple example of "promises" with ordering a pizza :-)
When we order a pizza, we don't get it immediately!
> Restaurant says, "We'll get it to you in 10 - 15 minutes." This is like a "promise"

Promise states:
> Pending: While we are waiting, the pizza is being prepared
Then:
> Fulfilled: The pizza is ready, and we're happy :-)
> Rejected: If there's a problem, we are not happy :-(
*/

// Anonymous Arrow function (no need)

// CB "callback"
const pizzaPromise = new Promise((resolve, reject) => {
    // prepare the promise:
    let isReady = false;
    // if the promise is Fulfilled or Rejected:
    if (isReady) {
        resolve("The pizza is ready, enjoy it");
    } else {
        reject("Sorry, there is an issue!");
    }
})
/*
Java, PHP, Python :-)
try {
    // try to run the code
} catch(Exception ex) {
    // catch an error/exception if any
} finally {
    // will always run (optionals)
}
*/
// run the promise object:
// method chaining
// each method accepts a function!
pizzaPromise
    .then((msg) => { console.log(msg) }) // to handle resolve msg1 = The pizza is ready, enjoy it
    .catch((err) => { console.log(err) }) // to handle reject err = Sorry, there is an issue
// .finally(()=>{ console.log("Thanks for coming!") });


/*
Let's take another simple example:
a promise from a student to get a high average value 
(A+ => 90 or more) for his/her two exams
*/
const highAvg = new Promise((resolve, reject) => {
    // prepare the promise:
    let exam1 = 91;
    let exam2 = 90;
    let avg = (exam1 + exam2) / 2;

    // if the promise is Fulfilled or Rejected:
    if (avg >= 90) {
        resolve("Passing with A+"); // Using double quotes 
    } else {
        reject("No worries");
    }
});

// another way (shortcut)
highAvg.then(
    // handel both resolve or reject!
    // CB1 => resolve
    msg => console.log(msg),
    // CB2 => reject
    err => console.log(err)
);