import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../components/organisms/nav";
import "./login.scss";

library.add(faUser, faLock);

const LoginPage = () => {
  return (
    <div className="loginPage">
      <Nav />
      <header className="loginPage__header">
        <h2>Sign in</h2>
      </header>
      <form className="loginPage__form" onSubmit={() => {}}>
        <label className="form--loginInput">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Username" />
        </label>
        <label className="form--loginInput">
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
