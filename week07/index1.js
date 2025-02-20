/*
Two modules:
- CommonJS => require() 
- ES (2015) => import
*/
// First: import "express"
// const express = require('express'); // Common JS
import express from 'express'; // ES module

const app = express(); // could any other name you like

const PORT = 3000;

// URL: http://localhost:3000/
// get('url end-point', callback)
app.get('/', (req, res) => {
  // what to display in the front-end:
  res.send('<h1>Hello Express JS framework! The minimal framework<h1>')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
