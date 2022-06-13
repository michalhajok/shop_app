import React, { useState } from "react";

import { useDispatch } from "react-redux";

import Button from '../../atoms/button'
import basketAction from "../../../redux/basket/actions";

import "./itemDetails.scss";

const ItemDetails = ({ product }) => {
    const { _id, title, description, brand, price, size, picture } = product;
    const dispatch = useDispatch();

    const [item, setItem] = useState({
        _id: _id,
        title: title,
        description: description,
        brand: brand,
        price: price,
        size: size[0].size,
        maxQuantity: size[0].quantity,
        quantity: 1,
        picture: picture,
    });

    const addProduct = () => {
        dispatch(basketAction.addToBasket(item));
    };

    const changeSize = (e) => {
        setItem({
        ...item,
        _id: _id + e.target.value,
        size: e.target.value,
        quantity: 1,
        maxQuantity:
            size[size.findIndex(({ size }) => size === e.target.value)].quantity,
        });
    };

    return (
        <main className="itemPage__details">
            <div className="details__caption">
                <h2>{brand}</h2>
                <h3>{title}</h3>
                <b>{price} zł</b>
            </div>
            <select value={item.size} onChange={changeSize}>
                {size.map(({ size, quantity }) => (
                <option key={size} value={size} disabled={quantity === 0}>
                    {size}
                </option>
                ))}
            </select>
            <Button click={addProduct}>
                <p>Add to card</p>
            </Button>
        </main>
    );
};

export default ItemDetails;
