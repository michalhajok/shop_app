import React from "react";
import { Link, useParams } from "react-router-dom";

import "./productItem.scss";

const ProductItem = ({ product }) => {
  const { _id, title, brand, price, picture } = product;
  const params = useParams();
  return (
    <Link
      to={`/shopApp/products/${params.category}/${_id}`}
      className="productItem"
    >
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
    </Link>
  );
};

export default ProductItem;
