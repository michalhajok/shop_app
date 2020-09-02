import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLock);

const LoginPage = () => {
  return (
    <div className="loginPage">
      <form className="loginPage__form" onSubmit={() => {}}>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Username" />
        </label>
        <label>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
 