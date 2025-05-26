// First Way: We already practiced this way in the previous lecture :-)
// CJS: Common JavaScript => Classical JS :-) => native for node 1
// const fs = require('node:fs'); // works immediately 

// Second Way: Trying this way for the first time :-)
// MJS: Module JavaScript => Modern JS :-) => new to node (after 2015)
import fs from 'node:fs'; // extra settings :-)
// SyntaxError: Cannot use import statement outside a module
/* 
1- Create **"package.json"** file
 - Manually as we create any file in VS Code. We will have an empty file!
 - Initialize it with npm command:
   - Node Package Manager:
     -=> npm init (filled with questions to be answered!)
     -=> npm init -y (skip all questions by using default values)
2- Modify this JSON file by adding this key:value:
    - "type": Module JS or Common JS (default)
*/

/* 
Blocking vs Non-Blocking Review:
********************************
Link: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
Any function that ends with "Sync" means "blocking".
sync <===> blocking
This means that the function, like "readFileSync", needs to finish its work before any other code can run.

Link: https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking#blocking

readFileSync => blocking
readFile => non-blocking
*/

// Same code below from our previous examples:
/* 
try {
    const txtContent = fs.readFileSync('./files/testing.txt', 'UTF-8');
    // readFileSync => blocking
    // testing:
    console.log(txtContent);
} catch (error) {
    console.log("Cannot read file! "+ error);
} 
*/

// Example2: readFile(file-name, cb); => non-blocking
/* 
fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    // different ways to handle err and data:
    if (err) {
        // output the error message => err
        console.log(err);
    } else {
        // output the file content => data
        console.log(data);
    }
}) 
*/

// Example3: readFile(file-name, cb); => non-blocking
fs.readFile('./files/testing.txt', 'utf8', (err, data) => {
    // different ways to handle err and data:
    if (err) {
        // output the error message => err
        console.log(err);
        // stop/terminate this function:
        return;
        /* 
        1- return a value
        2- stop the function/method
        */
    }
    // output the file content => data
    console.log(data); // undefined!
});