/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

// In my main repo of index3.js about combining all routes:
/*
- Route "/crud" => .get() HTTP method
- Route "/crud" => .post() HTTP method
- Route "/crud" => .put() HTTP method
- Route "/crud" => .delete() HTTP method
*/

// using the code of "index4.js" from my main repo:
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();
const PORT = 3000;

// URL => http://localhost:3000/
app.get('/', (req, res) => {
  res.send('<h1>Get info from url</h1>');
});

// URL: http://localhost:3000/employees
app.get('/employees', (req, res) => {
  res.json(data);
});

/*
  filter the output based on the id value
*/

// simple demo about params:
// URL: http://localhost:3000/users/:userId
// example: http://localhost:3000/users/19
app.get('/users/:userId', (req, res) => {
  res.send(req.params.userId);
});

// we can pass multiple params:

// another example: assuming we have data that represents Members
// Let's hard coding a memberId and memberAge for example:
// http://localhost:3000/members/28/age/47
app.get("/members/:memberId/age/:age", (req, res) => {
  /*
 IMPORTANT NOTE:
 All the values (route parameters) will be accepted as "string" data type,
 if you want to save them as numbers we need to convert them using one of the JS functions:
 - Number()
 - parseInt()
 - parseFloat()
 */
  const memberId = Number(req.params.memberId);
  const memberAge = Number(req.params.age);
  res.send(`Member ID: ${memberId} <br> Member Age: ${memberAge}`); // displayed in the browser
});

// Targeting our JSON file through the id property value
// URL: http://localhost:3000/employees/16
app.get('/employees/:id', (req, res) => {
  const empId = Number(req.params.id);
  const employee = data.filter((employee) => {
    return employee.id === empId;
  });

  res.send(employee);
  // [ { with all the properties} ]
});

app.listen(PORT, () => {
  console.log(`Example app listening on: http://localhost:${PORT}`)
});