import React from "react";

import "./itemDetails.scss";

const ItemDetails = ({ product }) => {
  const { title, brand, price, size } = product;

  return (
    <main className="itemPage__details">
      <div className="details__caption">
        <h2>{brand}</h2>
        <h3>{title}</h3>
        <p>{price} zł</p>
      </div>
      <select>
        {size.map((elem) => (
          <option key={elem.size} value={elem.size}>
            {elem.size}
          </option>
        ))}
      </select>
      <button> Add to card</button>
      <br />
    </main>
  );
};

export default ItemDetails;
