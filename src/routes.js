import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ element: Component, ...rest }) {
    const auth = useSelector((state) => state.auth);

    return (
        <Route
        {...rest}
        render={(props) =>
            auth.isAuth && auth.username ? (
            <Component {...props} />
            ) : (
            <Navigate to="/shopApp/login" />
            )
        }
        />
    );
}

export function PublicRoute({
    element: Component,
    exact,
    restricted,
    ...rest
    }) {
    const auth = useSelector((state) => state.auth.isAuth);

    return (
        <Route
        exact={exact}
        {...rest}
        render={(props) =>
            auth.isAuth ? <Navigate to="/shopApp" /> : <Component {...props} />
        }
        />
    );
}
