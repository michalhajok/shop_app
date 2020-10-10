import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./routes";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";
import RegisterPage from "./pages/registerPage";
import ItemPage from "./pages/itemPage";
import BasketPage from "./pages/basketPage";
import AdminPanel from "./pages/adminPanel";
import AdminProducts from "./pages/adminProducts";
import AdminItem from "./pages/adminItem";
import AdminUsers from "./pages/adminUsers";

import "./App.scss";
import "react-placeholder/lib/reactPlaceholder.css";

function App() {
  return (
    <BrowserRouter>
      <Switch className="App">
        <Route exact path="/shopApp/" component={HomePage} />
        <PublicRoute
          exact
          restricted={false}
          path="/shopApp/login"
          component={LoginPage}
        />
        <Route
          exact
          path="/shopApp/products/:category"
          component={ProductsPage}
        />
        <PublicRoute
          exact
          restricted={true}
          path="/shopApp/register"
          component={RegisterPage}
        />
        <Route
          exact
          path="/shopApp/products/:category/:_id"
          component={ItemPage}
        />
        <PrivateRoute exact path="/shopApp/adminPanel" component={AdminPanel} />
        <PrivateRoute
          exact
          path="/shopApp/adminPanel/products"
          component={AdminProducts}
        />
        <PrivateRoute
          exact
          path="/shopApp/adminPanel/users"
          component={AdminUsers}
        />
        <PrivateRoute
          exact
          path="/shopApp/adminPanel/product/:id"
          component={AdminItem}
        />
        <PublicRoute exact path="/shopApp/card" component={BasketPage} />
        <Route path="*">
          <div>
            <p>404 </p>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
