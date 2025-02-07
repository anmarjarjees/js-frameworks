/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/5.modules
*/

/* 
- require() => CommonJS => native node JS function => exports
- import => ES Module => node 14 and ... => export
*/

// the main file 1 for my application
// using CJS "Common" JS: require()
/* 
I need to call my two functions:
- checkEvenOdd
- getFactorial
*/

const myFunctions = require('./utilities1');
/* 
ReferenceError: 
require is not defined in ES module scope, you can use import instead
*/

// testing:
console.log(myFunctions); // { } an empty object (before using exports)


// Using functions from utilities1
let num = 5;
console.log(`number 5 is ${myFunctions.checkEvenOdd(num)}`); // number 5 is Odd
console.log(`number 8 is ${myFunctions.checkEvenOdd(8)}`); // number 8 is Even
/* 
To Review:
In JS with any browser => window.console.log()
In node environment => global.console.log()
*/
console.log(`number 3 is ${myFunctions.checkEvenOdd(3)}`); // number 3 is Odd