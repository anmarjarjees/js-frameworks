/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

/* 
Working with Static Files in Express: Part1 (Advanced Way)
**********************************************************

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

// URL => http://localhost:3000/users
app.get("/users", (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

// Second Way (advanced and recommended) using "__dirname" and "path":
// *******************************************************************
// First Step: using "__dirname"
app.use(express.static(__dirname + '/public'));
// Finally (Second Step), we can + or using join() method of path:
app.use(express.static(path.join(__dirname, 'public')));


// Testing:
// Example1: http://localhost:3000/img/dish1.jpg
// Example2: http://localhost:3000/
// Example3: http://localhost:3000/about.html

// URL => http://localhost:3000
// to run the app:
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});