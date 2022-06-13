import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "../../molecules/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import SignIn from "../../atoms/signIn";
import SignOut from "../../atoms/signOut";

import "./nav.scss";

const Nav = () => {

    const shoesLink = "/shop_app/products/";
    const clothesLink = "/shop_app/products/";

    const shoes = ["Sneakers", "Elegants"];
    const clothes = ["T-shirt", "Shirt", "Hoodie", "Trouser"];

    return (
        <nav className="navbar">
            <div className="navbar__header">
                <h2>
                    <Link to="/shop_app">Shop App</Link>
                </h2>
                <Link to="/shop_app/card" className="nav__link">
                    <FontAwesomeIcon icon={faBasketShopping} />
                </Link>
                <Link to='/shop_app'  className="nav__link">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            {/* {auth.isAuth ? <SignOut /> : <SignIn className="nav__link" />} */}
        </div>
        <ul className="navbar__nav">
            <Link className="nav__link" to="/shop_app">
            Home
            </Link>
            <Dropdown to={clothesLink} list={clothes} title="Clothes" />
            <Dropdown to={shoesLink} list={shoes} title="Shoes" />
        </ul>
        </nav>
    );
};

export default Nav;
