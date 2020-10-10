import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/shopApp/login" />
      }
    />
  );
};

export const PublicRoute = ({
  component: Component,
  exact,
  restricted,
  ...rest
}) => {
  const auth = useSelector((state) => state.auth.isAuth);

  return (
    <Route
      exact={exact}
      {...rest}
      render={(props) =>
        auth.isAuth && auth.username === "sadmin" ? (
          <Redirect to="/shopApp" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
