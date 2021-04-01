const React = require('react');
const ReactDOM = require('react-dom');
const Hello = require('../pages/home');

ReactDOM.hydrate(<Hello />, document.getElementById('root'));
