/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

/*
Two modules (Reviewing):
************************
- CJS => "Classical" Way :-) => "Common" JavaScript => require() 
- MJS => "Modern" Way :-) => "Module" JavaScript => ES (2015) => import
*/

// First: get express framework by using either CJS or MJS:
// 1) Using "CJS":
// const express = require('express'); // CJS => Common JS

// 2) Using "MJS":
import express from 'express'; // MJS => ES module
/* 
To Review:
When using "import" statement without modify the package.json:
SyntaxError: Cannot use import statement outside a module
*/

// Second: Creating an express object:
const app = express(); // "app" or could be any other name you like
/*
Why "app" object?
*****************
- "app" variable => is an object of type "express"
- "app" object gives us the access to all the required methods for performing the CRUD operation
- "app" CRUD methods will perform their operation through the API => Database
- "CRUD" Operations:
  > CREATE => app.post() => creating a new record (in MongoDB for example)
  > READ => works normally with the browser: app.get() => reading an existing record from MongoDB
  > UPDATE => app.put() => Updating an existing record in MongoDB 
  > DELETE => app.delete() => Deleting....

NOTES: 
- Using "postman" API Tool => next lecture :-) => app.post(), app.put(), app.delete()
- We will use "postman" is used to interact with NoSQL Database ("MongoDB")
*/

// Express works on this port number
const PORT = 3000;
// Express Base URL: http://localhost:3000/

/* 
Virtual Server => XAMPP Application: PHP Programming with MySQL Database
- PHP => Root (Base) URL => http://localhost/
    > PHP Example =>  http://localhost/php-lab1/
- Express => Root (Base) URL => http://localhost:3000/
*/

/* 
Starting with .get() method:
****************************
.get (param1, param2)
- param1 => Ending Point of the URL (End Route)
  Example: http://localhost:3000/employees
  /employees => is the endpoint 
- param2 => CB (Callback function) => ARROW ANONYMOUS FUNCTION!
  Example: (req, res) => {
              res.send('Hello World!')
            }

- get('url end-point', callback)
OR:
- get('url end-point', inline arrow anonymous function)

Review:
Callback or Callback Function:
A function passed as an argument to another function or method,  
to be executed later, typically after some operation completes.

In the example below,
the function (req, res) => { ... } is not being passed as an argument,
it is directly defined as an inline function (an arrow function).
*/

/* 
  - This defines a route handler for the root ('/') endpoint
  - The second argument (req, res) => { ... } is the route handler function
  - Express calls this function automatically when a GET request is made to '/'
*/
app.get('/', (req, res) => {
  // what to display in the front-end:
  // res.send() sends an HTML response to the client
  res.send('<h1>Hello Express JS framework! The minimal framework<h1>')
});

// more examples:
/* 
end point => "/about"
http://localhost:3000/about
*/
app.get('/about', (req, res) => {
  res.send('About Express Framework')
});

// http://localhost:3000/contact
app.get('/contact', (req, res) => {
  res.send('Contact Georgian College Student Services')
})

// Finally: Always ending with .listen() method:
app.listen(PORT, () => {
  console.log(`Example app listening on: http://localhost:${PORT}`)
});
