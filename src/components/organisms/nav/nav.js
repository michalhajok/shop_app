import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../../molecules/dropdown";

import "./nav.scss";

const Nav = () => {
    const [hamburger, setHamburger] = useState(false)
    const user = useSelector(state => state.auth)
    

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
                <>
                    {
                        user.isAuth ?
                        <Link to='/shop_app/myAccount'  className="nav__link">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        :
                        <Link to='/shop_app/login'  className="nav__link">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    }
                </>
                <div className="nav--hamburger" onClick={() => setHamburger(!hamburger)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
        </div>
        <ul className={`navbar__nav ${hamburger? 'navbar--hamburger': ''}`}>
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
