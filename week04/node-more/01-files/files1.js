// fs module
/* 
For this quick demo, we will learn how to read a file from the system:
- fs.readFile(): Reads the content of a file. Related: fs.read().
- fs.readFileSync(): Same as readFile() but operates synchronously. 
*/

const fs = require('node:fs');
// test:
// console.log(fs);
/* 
readFile: [Function: readFile],
readFileSync: [Function: readFileSync],
*/

/* 
fs.readFile();
fs.readFileSync(); 
*/

const { readFile, readFileSync } = require('node:fs');

/* readFile(); // non blocking
readFileSync(); // blocking */

const txt = readFileSync('./test.txt','utf-8');
console.log(txt);
console.log("a a a a a a");

readFile('./test.txt', (err, data) => {
    if (err) throw err;
    console.log(data); // here is my simple text file!
  });
