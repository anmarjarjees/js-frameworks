// First: import "express"
import express from 'express'; // ES module

// importing the json file to our index1.js:
import data from './data/mock-data.json' assert { type: 'json' };
/* 
IMPORTANT NOTE REVIEW:
**********************
Please consider the same note again that we discussed previously:

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

const app = express(); // could be any other name you like

const PORT = 3000;

// URL: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello Express JS framework! The minimal framework<h1>')
});

// Another example with getting data from a JSON FILE
/*
CRUD: using Express methods:
get() => Read
post() => Create
put() => Update
delete() => delete

NOTE: We need to use "Postman" to test "put", "post", "delete"
For practising, we are going to get the data from JSON file
To test it we can use the Postman and the browser
*/
// URL => http://localhost:3000/employees
app.get("/employees", (req, res) => {
    // using the response with the method ".json()"" to get the JSON data 
    // and send a JSON response to the route handler:
    res.json(data);
});

/*
2: Practising .post() HTTP method:
Based on the CRUD system, .post() is used for "Create"
Let's name our path => /create
*/
// URL => http://localhost:3000/create
app.post("/create", (req, res) => {
    res.send('Practising .post() HTTP method for "Create" using the rout "/create"');
});

/*
3: Practising .put() HTTP method:
Based on the CRUD system, .put() is used for "Update"
Let's name our path => /update
*/
// URL => http://localhost:3000/update
app.put("/update", (req, res) => {
    res.send('Practising .put() HTTP method for "Update" using the route "/update"');
});

/*
4: Practising .delete() HTTP method:
Based on the CRUD system, .delete() is used for "Delete"
Let's name our path => /delete
*/
// URL => http://localhost:3000/delete
app.delete("/delete", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete" using the route "/delete"');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})
