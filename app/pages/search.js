const React = require('react');
const { shape, arrayOf } = require('prop-types');
const Script = require('../utils/script');
const Layout = require('../components/search');
const serialize = require('serialize-javascript');
const Products = require('../components/productsList');

const Search = ({ items, breadcrumb }) => {
  const serializeProps = {
    items,
    breadcrumb
  };
  return (
    <div>
      <Script>
        {` window.ML_PRELOADED_STATE = ${serialize(serializeProps, { isJSON: true })}; `}
      </Script>
      <Layout />
      <Products {...serializeProps} />
    </div>
  )
}

Search.propTypes = {
  items: arrayOf(shape({})),
  breadcrumb: arrayOf(shape({}))
}

module.exports = Search;
