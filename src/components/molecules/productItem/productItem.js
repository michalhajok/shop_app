import React from "react";

import "./productItem.scss";

const ProductItem = ({ product }) => {
  const { title, brand, price, picture } = product;

  return (
    <div className="productItem">
      <figure className="productItem__image">
        <img src={picture[0]} alt="img" />
      </figure>
      <div className="productItem__details">
        <article>
          <h3>{brand}</h3>
          <p>{title}</p>
        </article>
        <section>
          <p>{price} zł</p>
        </section>
      </div>
    </div>
  );
};

export default ProductItem;
