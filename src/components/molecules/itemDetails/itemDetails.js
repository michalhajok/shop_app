import React from "react";

const ItemDetails = ({ product }) => {
  const { title, description, brand, price, size } = product;

  return (
    <main className="itemPage__details">
      <h2>{brand}</h2>
      <h3>{title}</h3>
      <p>{price} zł</p>
      <p>{description}</p>
      <select>
        {size.map((elem) => (
          <option key={elem.size} value={elem.size}>
            {elem.size}
          </option>
        ))}
      </select>
      <button> Add to card</button>
    </main>
  );
};

export default ItemDetails;
