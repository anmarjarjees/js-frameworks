// File System:
// fs module
/* 
node "fs" => file system 
The fs module:

Node.js has a built-in file system module called "fs":
- To access and interact with the file system
- To perform CRUD operations on files/folders
- No need to install it; being part of Node.js core
- has many methods for manipulating folders/files in the system
- fs can operate in a blocking or non-blocking way

Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs

For this quick demo, we will learn how to read a file from the system:
- fs.readFile(): Reads the content of a file
- fs.readFileSync(): Same as readFile() but operates synchronously

The only two methods/functions we will use from the fs module for now are:
- readFile
- readFileSync
*/

// Grab the file system fs :-)

/* 
To work with files:
1- include the "fs" module by using either one from the following ways:
    - CJS => Common JavaScript
    - MJS => Module JavaScript
*/

// First Way:
// CJS: Common JavaScript => Classical JS :-) => native for node since early versions
const fs = require('node:fs'); // works immediately 

// Second Way:
// MJS: Module JavaScript => Modern JS :-) => new to node (after 2015)
// import fs from 'node:fs'; // extra settings :-)
// SyntaxError: Cannot use import statement outside a module

// testing => fs module?
// console.log(fs);
/* 
methods of the "fs"
readFile: [Function: readFile],
readFileSync: [Function: readFileSync],

we can access them:
fs.readFile();
fs.readFileSync();

Blocking vs Non-Blocking
Link: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
Any function that ends with "Sync" means "blocking".
sync <===> blocking
This means that the function, like "readFileSync", needs to finish its work before any other code can run.

Link: https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking#blocking

readFileSync => blocking
readFile => non-blocking
*/

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

