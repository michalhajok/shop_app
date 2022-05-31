import React from "react";

import { useSelector } from "react-redux";

import Nav from "../../components/organisms/nav";
import BasketItem from "../../components/molecules/basketItem";
import Footer from "../../components/organisms/footer";

import "./basketPage.scss";

const BasketPage = () => {
  const basket = useSelector((state) => state.basket.basket);
  let amount = 0;
  (() => {
    basket.map(({ price, quantity }) => {
      return (amount += price * quantity);
    });
  })();

  return (
    <div className="basketPage">
      <Nav />
      <div className="basketPage__basket">
        {basket.length === 0 ? (
          <p className="basket__empty">Basket is empty</p>
        ) : (
          <div className="basket__card">
            <div className="card__itemList">
              {basket.map((item) => (
                <BasketItem key={item._id} item={item} />
              ))}
            </div>
            <div>Price: {amount} zł</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BasketPage;
