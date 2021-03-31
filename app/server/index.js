//importamos babel registrer para que compile el componente <Home />  que usa JSX
// para que se ejecute ReactDOMServer.renderToString
require('@babel/register');
require('@babel/polyfill');
const express = require('express');
const { getItemListing, getItem } = require('./services/item-services');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const axios = require('axios');
const Home = require('../shared/components/pages/home');
const Search = require('../shared/components/pages/search');
const Vip = require('../shared/components/pages/vip');
const template = require('./template');
const app = express();
const port = 3000;

// esto es para declarar a donde tiene que ir a buscar el bundle
//ya que las rutas son estaticas debemos declarar de donde tiene que ir
// a buscar el archivo
app.use('/', express.static(path.join(__dirname, '../../build')));

app.get("/", (req, res) => {
  //ReactDOMServer.renderToString disponibilidad un html estatico, el browser ya va a tener disponible algo para cargar
  // en caso de que no llegue a ejecutar el bundle de javascript o mientras lo ejecuta
  res.send(template('home', ReactDOMServer.renderToString(React.createElement(Home, {}, null))));
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


app.get("/items", (req, res) => {
  const query = req.query.search;
  const props = {};
  axios.get('http://localhost:3000/api/items/', { params: { q: query } })
    .then(response => {
      props.items = response.data.items;
      res.send(template('search', ReactDOMServer.renderToString(React.createElement(Search, { ...props }, null))));
    })
    .catch(e => console.error(e))
});

app.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const props = {};
  axios.get(`http://localhost:3000/api/items/${itemId}`).then(
    response => {
      props.itemData = response.data;
      res.send(template('vip',
        ReactDOMServer.renderToString(React.createElement(Vip, { ...props }, null))));
    }
  ).catch(e => console.error(e));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
