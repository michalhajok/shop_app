import React from "react";
import { useDispatch } from "react-redux";
import authActions from "../../../redux/auth/actions";

const SignOut = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div onClick={logout} className="nav__link">
      Sign out
    </div>
  );
};

export default SignOut;
