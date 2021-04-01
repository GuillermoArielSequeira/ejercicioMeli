const React = require('react');
const Script = require('../helpers/script');
const Layout = require('../components/search');
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
      <Layout />
      {props.items && props.items.map(
        item =>
          <h4 key={item.id}>
            <a href={`items/${item.id}`}>
              {item.title}
            </a>
          </h4>)}
    </div>
  )
}

module.exports = Search;
