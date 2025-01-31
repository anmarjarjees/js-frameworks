/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/3.files
*/

// Using Promises based solution to read file:
// Accessing the promises API of the fs module:
const { readFile } = require('fs').promises;

// The classical way that works with all Node.js versions:
async function getFile() {
    const myText = await readFile('./test.txt', 'utf-8');
    console.log("getFile() function:", myText); // Logs the content of test.txt.
}

getFile();
console.log("I will be the first!");