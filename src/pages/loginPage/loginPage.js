import React, { useState } from "react";

import { useDispatch } from "react-redux";
import authActions from "../../redux/auth/actions";

import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../components/organisms/nav";
import Footer from "../../components/organisms/footer";
import "./login.scss";

library.add(faUser, faLock);

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    dispatch(authActions.login(user, history));
  };

  return (
    <div className="loginPage">
      <Nav />
      <div className="loginPage--content">
        <header className="loginPage__header">
          <h2>Sign in</h2>
        </header>
        <form className="loginPage__form" onSubmit={login}>
          <label className="form--loginInput">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </label>
          <label className="form--loginInput">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </label>
          <button type="submit">Sign in</button>
          <button className="loginPage--register">
            <Link to="/shopApp/register">Register</Link>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
