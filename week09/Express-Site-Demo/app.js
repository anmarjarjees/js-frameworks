// Or Using CommonJS (node) Syntax (default):
// import express from 'express';
const express = require('express');

/*
Importing the "path" module:
import path from "path"; 

But since we are using CommonJS native, 
we will use require:
*/
const path = require('path');

// Creating an instance of express named "app" by convention:
const app = express();
const port = 3000;

// write our code:
/* 
According to Express, two approaches
 */
// First Way (basic FYI):
app.use(express.static('public'));

// Second Way (advanced and recommended): "__dirname"
app.use(express.static(__dirname + '/public'));

// Finally, we can + or using join() method of path:
app.use(express.static(path.join(__dirname, 'public')));

// URL => http://localhost:3000
// to run the app:
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});