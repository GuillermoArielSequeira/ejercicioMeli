const express = require('express');
const { getItemListing, getItem } = require('./services/item-services');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('hola mundo');
});

app.get("/api/items", (req, res) => {
  getItemListing(req.query.q)
    .then(response => res.json(response))
    .catch(error => res.sendStatus(500, error))
});

app.get("/api/items/:id", (req, res) => {
  getItem(req.params.id)
    .then(response => res.json(response))
    .catch(error => res.sendStatus(500, error))
});

app.get("/", (req, res) => res.send('hola mundo'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
