//importamos babel registrer para que compile el componente <Home /> que usa JSX
require('@babel/register');
require('@babel/polyfill');
const express = require('express');
const { getItemListing, getItem } = require('./services/item-services');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const Hello = require('../shared/components/pages/hello');
const template = require('./template');
const app = express();
const port = 3000;

// esto es para declarar a donde tiene que ir a buscar el bundle
//ya que las rutas son estaticas debemos declarar de donde tiene que ir
// a buscar el archivo
app.use('/', express.static(path.join(__dirname, '../../build')));

app.get("/", (req, res) => {
  res.send(template('home', ReactDOMServer.renderToString(React.createElement(Hello, {}, null))));
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
