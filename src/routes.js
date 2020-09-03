import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth.isAuth);

  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const auth = useSelector((state) => state.auth.isAuth);

  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        auth && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
