const React = require('react');
require('./productsList.scss');

const Products = ({ items, breadcrumb }) => (
  <div className="products" >
    <div>{breadcrumb.map(cat => `${cat.name}`)}</div>
    <div className="products-container">
      {items && items.map(
        item =>
          <div className="product" key={item.id}>
            <a className="product-item" href={`items/${item.id}`}>
              <img className="product-item-image" src={item.picture} alt="product-image"></img>
              <div className="product-item-info">
                <div className="product-item-info-price">
                  <div className="product-item-info-price-money">
                    $ {item.price.amount}
                    {item.price.decimals > 0 && <sup>{item.price.decimals}</sup>}

                  </div>
                  {item.free_shipping &&
                    <img
                      className="product-item-info-price-icon"
                      src={'../assets/ic_shipping.png'}
                      srcSet="../assets/ic_shipping.png 1x,
                      ../assets/ic_shipping@2x.png 2x"
                      alt="free-shipiing-icon"
                    />
                  }
                </div>
                <h4 className="product-item-info-title">
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
