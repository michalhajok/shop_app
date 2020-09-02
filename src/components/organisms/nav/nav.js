import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SignIn from "../../atoms/signIn";
import SignOut from "../../atoms/signOut";

const Nav = () => {
  const auth = useSelector((state) => state.auth.isAuth);

  const shoes = ["sneakers", "elegants"];
  const clothes = ["tShirts", "shirts", "hoodies", "trousers"];

  return (
    <nav>
      <ul>
        <Link to="/shopApp">Home</Link>
        {shoes.map((shoe) => (
          <Link to={`/shopApp/products/${shoe}`} key={shoe}>
            {shoe}
          </Link>
        ))}
        {clothes.map((cloth) => (
          <Link to={`/shopApp/products/${cloth}`} key={cloth}>
            {cloth}
          </Link>
        ))}
      </ul>
      <div>{auth ? <SignOut /> : <SignIn />}</div>
    </nav>
  );
};

export default Nav;
