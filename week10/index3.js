// based on index5 from the main repo:
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

// URL => http://localhost:3000/users
app.get("/users", (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

/*
.static() method:
-----------------
app.use(express.static('public'))
Link: https://expressjs.com/en/starter/static-files.html
*/

app.use(express.static('public'));

// Example1: http://localhost:3000/img/dish2.jpg
// Example2: http://localhost:3000/
// Example3: http://localhost:3000/about.html

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})