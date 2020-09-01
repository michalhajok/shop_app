import React from "react";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <form className="loginPage__form" onSubmit={()=>{}}>
        <label>
          <input type="text" placeholder="Username" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
