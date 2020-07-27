import React from 'react';
import "./Product.css";

const Products = ({ product }) => {

  return (
    <div className="wrap-product">
      <a href={product.url} target="_blank" rel="noopener noreferrer" className="product" >
        <div className="product-img" style={{ backgroundImage: `url(${product.image})` }}>&nbsp;</div>
        <h4>{product.title}</h4>
        <p>{product.content}</p>
        <span>ver más</span>
      </a>
    </div >
  );
}

export default Products;
