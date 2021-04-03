const React = require('react');
const Script = require('../utils/script');
const Layout = require('../components/search');
const serialize = require('serialize-javascript');
const Products = require('../components/productsList');

const Search = props => {
  const serializeProps = {
    items: props.items,
    breadcrumb: props.breadcrumb
  };
  return (
    <div>
      <Script>
        {` window.ML_PRELOADED_STATE = ${serialize(serializeProps, { isJSON: true })}; `}
      </Script>
      <Layout />
      <Products {...props} />
    </div>
  )
}

module.exports = Search;
