import React from "react";

import "./itemDetail.scss";

const ItemDetail = ({ product, openModal }) => {
  const { title, description, price, picture, size, brand } = product;

  return (
    <div className="adminItem__item">
      <section className="item__picSection">
        {picture.map((pic) => (
          <figure key={pic}>
            <img src={pic} alt="pic" />
          </figure>
        ))}
      </section>
      <section className="item__details">
        <p>
          Brand: <b>{brand}</b>
        </p>
        <p>
          Title: <b>{title}</b>
        </p>
        <p>
          Price: <b>{price}</b>
        </p>
        <p>
          Description: <b>{description}</b>
        </p>
      </section>
      <div>
        {size.map(({ size, quantity }) => (
          <p key={size}>
            Size: <b>{size}</b>, Quantity: <b>{quantity}</b>
          </p>
        ))}
      </div>
      <button onClick={openModal}>Change</button>
    </div>
  );
};

export default ItemDetail;
