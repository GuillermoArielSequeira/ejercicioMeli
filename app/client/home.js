const React = require('react');
const ReactDOM = require('react-dom');
const Hello = require('../shared/components/pages/home');

ReactDOM.hydrate(<Hello />, document.getElementById('root'));
