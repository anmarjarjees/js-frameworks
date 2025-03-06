/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

import express from 'express'; // ES module

// import the data/content from the JSON file:
// needs an import assertion of type "json"
import data from './data/mock-data.json' assert { type: 'json'};
/* 
IMPORTANT NOTE:
***************
assert { type: 'json' } part tells JavaScript that the imported file is JSON. 
This is required for JSON imports in ES modules

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_assertions
Link: https://nodejs.org/download/release/v18.11.0/docs/api/esm.html#json-modules

Please be advised that the "assert" keyword has been "deprecated" in favor of the "with" keyword.
Older versions of Node.js required importing JSON files using "assert",
while newer versions using "with":
> import data from './data/mock-data.json' with { type: 'json' };

Link: https://nodejs.org/api/esm.html#import-assertions
*/

const app = express(); // could any other name you like

const PORT = 3000;

// route:
// URL: http://localhost:3000/
app.get('/', (req, res) => {
  res.send('<h1>Learning about JSON API<h1>')
});

// URL: http://localhost:3000/about
app.get('/about', (req, res) => {
  res.send("<h1>About Express</h1>");
});

// URL: http://localhost:3000/learn
app.get('/learn', (req, res) => {
  res.send("<h1>Learn the essentials of Express JS</h2>");
});

// how to fetch the JSON contents:
// http://localhost:3000/employees
app.get('/employees', (req, res) => {
  // res.send("<h1>Employees</h1>"); // Sending an HTML response (not JSON)
  res.json(data);
  /* 
    - res.json() is specifically for sending JSON responses and ensures the correct Content-Type
    - res.send() is more flexible but requires careful handling to avoid unintended behavior
  */
});

app.listen(PORT, () => {
  console.log(`Example app listening on: http://localhost:${PORT}`)
});