const React = require('react');
const Script = require('../helpers/script');
const serialize = require('serialize-javascript');

const Vip = props => {

  const serializeProps = {
    itemData: props.itemData
  };

  return (
    <div>
      <Script>
        {` window.ML_PRELOADED_STATE = ${serialize(serializeProps, { isJSON: true })}; `}
      </Script>
      <h1>hola Vip</h1>
      <p>asdasdasdasd</p>
    </div>
  )
};

module.exports = Vip;
