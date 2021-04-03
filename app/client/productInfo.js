const React = require('react');
const ReactDOM = require('react-dom');
const ProductInfo = require('../pages/productInfo');

const preloadState = window.ML_PRELOADED_STATE;

ReactDOM.hydrate(<ProductInfo {...preloadState} />, document.getElementById('root'));
