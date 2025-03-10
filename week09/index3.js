/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

/* 
Working with Static Files in Express: Part1 (Basic Way)
*******************************************************

.static() method:
-----------------
app.use(express.static('public'))
Link: https://expressjs.com/en/starter/static-files.html
*/

// based on index5 from the main repo:
import express from "express";
import data from './data/mock-data.json' with { type: 'json' };

const app = express();

const PORT = 3000;

/* 
According to Express, two approaches
*/
// First Way (basic FYI):
// **********************
app.use(express.static('public'));

// Testing:
// Example1: http://localhost:3000/img/dish1.jpg
// Example2: http://localhost:3000/
// no need (index is always the default start point) => // http://localhost:3000/index.html
// Example3: http://localhost:3000/about.html

app.listen(PORT, () => {
    console.log(`Example app base url: http://localhost:${PORT}`)
});