import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Dropdown from "../../molecules/dropdown";
import SignIn from "../../atoms/signIn";
import SignOut from "../../atoms/signOut";

import "./nav.scss";

const Nav = () => {
  const auth = useSelector((state) => state.auth);

  const shoesLink = "/shopApp/products/";
  const clothesLink = "/shopApp/products/";

  const shoes = ["Sneakers", "Elegants"];
  const clothes = ["T-shirt", "Shirt", "Hoodie", "Trouser"];

  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <Link className="nav__link" to="/shopApp">
          Home
        </Link>
        <Dropdown to={clothesLink} list={clothes} title="Clothes" />
        <Dropdown to={shoesLink} list={shoes} title="Shoes" />
      </ul>
      <div className="navbar__rest">
        <Link to="/shopApp/card" className="nav__link">
          Card
        </Link>
        {auth.isAuth ? <SignOut /> : <SignIn className="nav__link" />}
        {auth.username === "sadmin" ? (
          <Link className="nav__link" to="/shopApp/AdminPanel">
            Admin Panel
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
