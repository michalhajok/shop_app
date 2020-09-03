import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Dropdown from "../../molecules/dropdown";
import SignIn from "../../atoms/signIn";
import SignOut from "../../atoms/signOut";

import "./nav.scss";

const Nav = () => {
  const auth = useSelector((state) => state.auth.isAuth);

  const shoesLink = "/shopApp/products/";
  const clothesLink = "/shopApp/products/";

  const shoes = ["Sneakers", "Elegants"];
  const clothes = ["T-shirts", "Shirts", "Hoodies", "Trousers"];

  return (
    <nav className="navbar">
      <ul className="navbar__nav" >
        <Link className="nav__link" to="/shopApp">Home</Link>
        <Dropdown className="nav__link"  to={clothesLink} list={clothes} title="Clothes" />
        <Dropdown className="nav__link" to={shoesLink} list={shoes} title="Shoes" />
      </ul>
      <div>{auth ? <SignOut /> : <SignIn />}</div>
    </nav>
  );
};

export default Nav;
