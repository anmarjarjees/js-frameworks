/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/3.files
*/

// "fs":
/* 
readFile: [Function: readFile],
readFileSync: [Function: readFileSync],
*/
const { readFile, readFileSync } = require('node:fs');

// test:
readFile('./files/testing.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
        /* 
        1- Throwing the exception (error details)
        2- Stop the entire app
        */
    }
    console.log(data);
})


// or shorthand without { } block:
readFile('./test.txt', (err, data) => {
    if (err) throw err;
    console.log(data); // here is my simple text file!
});
