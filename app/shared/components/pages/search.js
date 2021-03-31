const React = require('react');
const Script = require('../helpers/script');
const serialize = require('serialize-javascript');

const Search = props => {
  const serializeProps = {
    items: props.items
  };
  console.log(props);
  return (
    <div>
      <Script>
        {` window.ML_PRELOADED_STATE = ${serialize(serializeProps, { isJSON: true })}; `}
      </Script>
      <h1>hola Search</h1>
      <p>asdasdasdasd</p>
    </div>
  )
}

module.exports = Search;
