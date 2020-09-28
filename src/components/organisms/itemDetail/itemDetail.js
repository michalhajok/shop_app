import React from "react";

import "./itemDetail.scss";

const ItemDetail = ({ product, openModal }) => {
  const {
    title: _title,
    description: _description,
    price: _price,
    size: _size,
    brand: _brand,
  } = product;

  return (
    <div className="adminItem__item">
      <p>Brand: {_brand}</p>
      <p>Title: {_title}</p>
      <p>Price: {_price}</p>
      <p>Description: {_description}</p>
      <div>
        {_size.map(({ size, quantity }) => (
          <p key={size}>
            Size: {size}, Quantity: {quantity}
          </p>
        ))}
      </div>
      <button onClick={openModal}>Change</button>
    </div>
  );
};

export default ItemDetail;
