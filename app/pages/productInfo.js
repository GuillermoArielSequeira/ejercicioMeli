const React = require('react');
const { shape } = require('prop-types');
const Script = require('../utils/script');
const Layout = require('../components/search');
const serialize = require('serialize-javascript');
const ProductInfo = require('../components/productInfo');

const Product = ({ itemData }) => {

  const serializeProps = {
    itemData
  };

  return (
    <div>
      <Script>
        {` window.ML_PRELOADED_STATE = 
        ${serialize(serializeProps, { isJSON: true })}; `}
      </Script>
      <Layout />
      { itemData && <ProductInfo {...itemData.item} />}
    </div>
  )
};

Product.propTypes = {
  itemData: shape({})
}

module.exports = Product;
