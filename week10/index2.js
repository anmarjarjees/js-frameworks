import express from "express";
// not in use:
// import data from './data/mock-data.json' assert { type: 'json' };

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
        console.log(`Example app listening on port http://localhost:${PORT}`)
    })