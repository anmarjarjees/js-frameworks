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
// get('url end-point', callback)
app.get('/', (req, res) => {
  // what to display in the front-end:
  res.send('<h1>Hello Express JS framework! The minimal framework<h1>')
});

app.listen(PORT, () => {
  console.log(`Example app listening on: http://localhost:${PORT}`)
});
