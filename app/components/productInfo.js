const React = require('react');
require('./productInfo.scss');

const ProductsInfo = ({ title, picture, price, condition, sold_quantity, description }) => (
  <div className="products-info">
    <div className="products-info-container">
      <div className="products-info-container-buy">
        <div className="products-info-container-buy-container-image">
          <img className="products-info-container-buy-container-image-content" src={picture} alt="product-image" />
        </div>
        <div className="products-info-container-buy-texts">
          <div className="products-info-container-buy-texts-subtitle">
            {condition === 'new' ? 'Nuevo' : 'Usado'}
            {sold_quantity > 0 && ` - ${sold_quantity} vendidos`}
          </div>
          <h2 className="products-info-container-buy-texts-title">{title}</h2>
          <div className="products-info-container-buy-texts-price">
            $ {price.amount}
            {price.decimals > 0 && <sup>{price.decimals}</sup>}
          </div>
          <a href="#">
            <div className="products-info-container-buy-texts-button" >Comprar</div>
          </a>
        </div>
      </div>
      <div className="products-info-container-description">
        <h3 className="products-info-container-description-title" >Descripción del producto</h3>
        {description && <p className="products-info-container-description-description">{description}</p>}
      </div>
    </div>
  </div>
)

module.exports = ProductsInfo;
