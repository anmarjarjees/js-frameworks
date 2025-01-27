/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/1.basic
*/

/* 
The built-in method: console.log()
In the browser:
    > window.console.log("run on the browser");
    or just:
    > console.log("run on the browser");

    window is the browser object

    in Node environment:
    Global is the browser object
*/
global.console.log("run on the terminal");
// OR Just:
console.log("Using the simple log method");

// console.log(global);

console.log("Quick Test");



console.log(__filename);
// below just an example:
// C:\Users\a.jarjees\Documents\JS-F-Mon\week04\index.js

console.log(__dirname);
// below just an example:
// C:\Users\a.jarjees\Documents\JS-F-Mon\week04

console.log();

// The global process module:
// console.log(process);

// console.log(process.version);
// console.log(process.release);

// console.log(process.arch); // x64

// console.log(process.title);
console.log(process.env.COMPUTERNAME);

//
console.log(process.env.USERNAME);

console.log(process.cwd());

