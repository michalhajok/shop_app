import React from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import basketAction from "../../../redux/basket/actions";

import "./basketItem.scss";

const BasketItem = ({ item }) => {
    const { _id, title, brand, size, quantity, price, picture } = item;
    
    const dispatch = useDispatch();
    const _delete = () => {
        dispatch(basketAction.deleteFromBasket(_id));
    };
    

    const plusQuantity = () => dispatch(basketAction.changePlusQuantity(item))
    
    const minusQuantity = () => dispatch(basketAction.changeMinusQuantity(item))
        
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
                <div className="basketItem--quantity">
                    <FontAwesomeIcon icon={faMinus} onClick={minusQuantity} />
                    <p>{quantity}</p>
                    <FontAwesomeIcon icon={faPlus} onClick={plusQuantity} />
                </div>
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
