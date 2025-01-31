global.console.log("testing");

console.log("Node");

/* 
global
process 
console
setTimeout(), clearTimeout(), setInterval(), clearInterval():
   - The built-in timer functions are globals
*/

// Practice with built-in timer functions: setTimeout() and setInterval()
function greet1() {
    console.log("Hello and welcome to node.js!");
}

// Using setTimeout to call our "greet1" function after 2 seconds
// setTimeout(cb, ms);
let greet1Timer = setTimeout(greet1, 3000);

clearTimeout(greet1Timer);


function keepGoing() {
    console.log("Never give up, keep learning and you will see the difference suddenly!");
}

// setInterval(cb, ms) keeps calling the cb every ms
// setInterval(keepGoing,2000);

// Accessing the process object
console.log(typeof process); 

console.log(process.version); // Example output: v16.14.0
console.log(process.release);
console.log(process.platform);
console.log(process.arch); 
console.log(process.title); 

// .env: returns an object containing the user environment variables
console.log(process.env); // Outputs the environment variables object
console.log(process.env.USERNAME);

console.log(process.cwd()); 