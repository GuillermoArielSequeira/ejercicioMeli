const React = require('react');
require('./productInfo.scss');

const ProductsInfo = ({ title, picture, price, condition, sold_quantity, description }) => (
  <div className="products-info">
    <div className="products-info-container">
      <div className="products-info-container-side-info">
        <div className="products-info-container-side-info-subtitle">
          {condition === 'new' ? 'Nuevo' : 'Usado'}
          {sold_quantity > 0 && ` - ${sold_quantity} vendidos`}
        </div>
        <h2 className="products-info-container-side-info-title">{title}</h2>
        <div className="products-info-container-side-info-price">
          $ {price.amount}
          {price.decimals > 0 && <sup>{price.decimals}</sup>}
        </div>
        <a href="#">
          <div className="products-info-container-side-info-button" >Comprar</div>
        </a>
      </div>
      <div className="products-info-container-central-info">
        <img className="products-info-container-central-info-image" src={picture} alt="product-image" />
        <h3 className="products-info-container-central-info-title" >Descripción del producto</h3>
        {description && <p className="products-info-container-central-info-description">{description}</p>}
      </div>
    </div>
  </div>
)

module.exports = ProductsInfo;
