/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/5.modules
*/

/* 
- require() => CommonJS => native node JS function => exports
- import => ES Module => node 14 and ... => export
*/

// ES Module => import with export
// the main file 2 for my application
// using MJS "Module" JS: import :-)
// same as your lab2
/* 
Error Message:
SyntaxError: The requested module './utilities2.js' does not provide an export named 'default'
*/

// Lab#2 example
// Importing the entire module object from utilities2.js
// importing all the functions/variables/etc...
import * as myFunctions from './utilities2.js';

// importing only specific function(s):
// {} Destructuring assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
import { school, program, verifyEvenOdd, findAvg } from './utilities2.js';
/* 
NOTE: 
we have to write the full file name => utilities2.js
Error => Did you mean to import ../my-module2.js?

Warning: 
To load an ES module, set "type": "module" 
in the package.json or use the .mjs extension.
SyntaxError: 
The requested module './my-module2.js' does not provide an export named 'default'
*/
console.log(myFunctions);

let check = verifyEvenOdd(6);
console.log(check);

console.log("Our School: " + school);

let number = 7;
console.log(`The number ${number} is "${verifyEvenOdd(number)}" number.`);


let num1 = 89;
let num2 = 90;
console.log(`The average of ${num1} and ${num2} is ${findAvg(num1, num2)}`);

console.log(`
    The average of ${num1} and ${num2} 
    is ${myFunctions.findAvg(num1, num2)}`);
