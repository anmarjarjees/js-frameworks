/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/3.files
*/

// File System:
// fs module
/* 
Node.js has a built-in file system module called "fs":
- To access and interact with the file system
- To perform CRUD operations on files/folders
- No need to install it; being part of Node.js core
- has many methods for manipulating folders/files in the system
- fs can operate in a blocking or non-blocking way

Link: https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs

For this quick demo, we will learn how to read a file from the system:
- fs.readFile(): Reads the content of a file. Related: fs.read().
- fs.readFileSync(): Same as readFile() but operates synchronously. 

The only two methods/functions we will use from the fs module for now are:
- readFile
- readFileSync
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

const txt = readFileSync('./test.txt', 'utf-8');
console.log(txt);
console.log("a a a a a a");

readFile('./test.txt', (err, data) => {
  if (err) throw err;
  console.log(data); // here is my simple text file!
});
