import React from "react";

import { Link } from "react-router-dom";

import "./listOfProducts.scss";

const ListOfProducts = ({ filters, products }) => {
  const { brand, category, title } = filters;

  return (
    <div className="itemList">
      {products
        .filter(({ type }) =>
          type.toLowerCase().includes(category.toLowerCase())
        )
        .filter(({ brand: _brand }) =>
          _brand.toLowerCase().includes(brand.toLowerCase())
        )
        .filter(({ title: _title }) =>
          _title.toLowerCase().includes(title.toLowerCase())
        )
        .map(({ _id, brand, title }) => (
          <Link
            className="itemList--item"
            to={`/shop_app/adminPanel/product/${_id}`}
            key={_id}
          >
            <b>{brand}</b>
            <br />
            {title}
          </Link>
        ))}
    </div>
  );
};

export default ListOfProducts;
