const React = require('react');
require('./products.scss');

const Products = ({ items }) => (
  <div className="products" >
    <div className="products-container">
      {items && items.map(
        item =>
          <div className="product" key={item.id}>
            <a className="product-item" href={`items/${item.id}`}>
              <img className="product-item-image" src={item.picture} alt="product"></img>
              <div className="product-item-info">
                <div className="product-item-info-price">
                  $ {item.price.amount}
                  {item.price.decimals > 0 && <sup>{item.price.decimals}</sup>}
                </div>
                <h4 className="product-item-info-title5">
                  {item.title}
                </h4>
              </div>
              <div className="product-item-location">{item.location}</div>
            </a>
          </div>
      )}
    </div>
  </div >
)

module.exports = Products;
