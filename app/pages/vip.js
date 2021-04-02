const React = require('react');
const Script = require('../utils/script');
const Layout = require('../components/search');
const serialize = require('serialize-javascript');
const ProductInfo = require('../components/productInfo');

const Vip = props => {

  const serializeProps = {
    itemData: props.itemData
  };

  return (
    <div>
      <Script>
        {` window.ML_PRELOADED_STATE = 
        ${serialize(serializeProps, { isJSON: true })}; `}
      </Script>
      <Layout />
      { props.itemData && <ProductInfo {...props.itemData.item} />}
    </div>
  )
};

module.exports = Vip;
