/* 
Notice that the code below is a quick summary. 
For more detailed reading with full comments:
Link: https://github.com/anmarjarjees/express-basics
*/

/* 
CRUD Operation Demo with POSTMAN - Part2: Combined Methods (chaining)
Link: https://github.com/anmarjarjees/express-basics/blob/main/README.md#postman-and-json-data
*/
import express from "express";

const app = express();

const PORT = 3000;
// same URL => http://localhost:3000/crud
app.get('/crud', (req, res) => {
    res.send('Practising .get() HTTP method for "Read/Retrieve"');
});

app.post("/crud", (req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
});

app.put("/crud", (req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
});

app.delete("/crud", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
});


/*
Link: https://expressjs.com/en/guide/routing.html#app-route

app.route().get().post().delete()
*/
app.route('/route')
    .get((req, res) => {
        res.send('Practising .get() HTTP method for "Read/Retrieve"');
    })
    .post((req, res) => {
        res.send('Practising .post() HTTP method for "Create"');
    })
    .put((req, res) => {
        res.send('Practising .put() HTTP method for "Update"');
    })
    .delete((req, res) => {
        res.send('Practising .delete() HTTP method for "Delete"');
    });

app.listen(PORT, () => {
    console.log(`Example app base url: http://localhost:${PORT}`)
})