import React from "react";
import { useDispatch } from "react-redux";
import basketAction from "../../../redux/basket/actions";

import "./basketItem.scss";

const BasketItem = ({ item }) => {
  const { _id, title, brand, size, quantity, price, picture } = item;
  const dispatch = useDispatch();
  const _delete = () => {
    dispatch(basketAction.deleteFromBasket(_id));
  };

  return (
    <div className="basketItem">
      <figure className="basketItem__figure">
        <img src={picture[0]} alt="photoMini" />
      </figure>
      <section className="basketItem__header">
        <p>
          <b>{brand}</b>
        </p>
        <p>{title}</p>
        <article>
          <p>Size: {size}</p>
          <p>Quantity: {quantity}</p>
          <p> Price: {price} zł</p>
        </article>
        <p onClick={_delete} className="basketItem__delete">
          Delete product
        </p>
      </section>
    </div>
  );
};

export default BasketItem;
