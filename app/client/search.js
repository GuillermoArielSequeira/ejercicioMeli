const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('../shared/components/pages/search');

const preloadState = window.ML_PRELOADED_STATE;

ReactDOM.hydrate(<Search {...preloadState} />, document.getElementById('root'));
