const React = require('react');
const Script = require('../utils/script');
const Layout = require('../components/search');
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
      <Layout />
      { props.itemData && (<div>
        <h1>hola Vip</h1>
        <h2>{props.itemData.item.title}</h2>
        <img src={props.itemData.item.picture} alt="" />
        <p>asdasdasd</p>
      </div>
      )
      }
    </div>
  )
};

module.exports = Vip;
