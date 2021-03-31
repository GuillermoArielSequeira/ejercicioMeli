const React = require('react');
const ReactDOM = require('react-dom');
const Vip = require('../shared/components/pages/vip');

const preloadState = window.ML_PRELOADED_STATE;

ReactDOM.hydrate(<Vip {...preloadState} />, document.getElementById('root'));
