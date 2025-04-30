/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

/*
Two modules (Reviewing):
************************
- CJS => [Classical :-) Way] => Common JavaScript => require() 
- MJS => [Modern :-) Way] => Module JavaScript => ES (2015) => import
*/

// First: import "express"

// Using "CJS":
// const express = require('express'); // CJS => Common JS

// Using "MJS":
import express from 'express'; // MJS => ES module

const app = express(); // could be any other name you like

const PORT = 3000;

// URL: http://localhost:3000/
/* 

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

app.listen(PORT, () => {
  console.log(`Example app listening on: http://localhost:${PORT}`)
});
