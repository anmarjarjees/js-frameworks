import express from 'express'; // ES module

// import the data/content from the JSON file:
import data from './data/mock-data.json' assert { type: 'json'};
// needs an import assertion of type "json"

const app = express(); // could any other name you like

const PORT = 3000;

// route:
// URL: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Learning about JSON API<h1>')
  });

// URL: http://localhost:3000/about
app.get('/about', (req, res)=>{ 
    res.send("<h1>About Express</h1>");
})

// URL: http://localhost:3000/learn
app.get('/learn', (req, res)=>{ 
    res.send("<h1>Learn the essentials of Express JS</h2>");
})

// how to fetch the JSON contents:
// http://localhost:3000/employees
app.get('/employees', (req, res)=>{ 
  // res.send("<h1>Employees</h1>");
  res.json(data);
  // write any code to format the data...
})

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
  });