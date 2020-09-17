import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";
import RegisterPage from "./pages/registerPage";
import ItemPage from "./pages/itemPage";
import AdminPanel from './pages/adminPanel'

import "./App.scss";
import 'react-placeholder/lib/reactPlaceholder.css';

function App() {
  return (
    <BrowserRouter>
      <Switch className="App">
        <PublicRoute
          exact
          restricted={false}
          path="/shopApp/"
          component={HomePage}
        />
        <PublicRoute
          exact
          restricted={false}
          path="/shopApp/login"
          component={LoginPage}
        />
        <PublicRoute
          exact
          restricted={true}
          path="/shopApp/products/:category"
          component={ProductsPage}
        />
        <PublicRoute
          exact
          restricted={true}
          path="/shopApp/register"
          component={RegisterPage}
        />
        <PublicRoute
          exact
          restricted={false}
          path="/shopApp/products/:category/:_id"
          component={ItemPage}
        />
        <PublicRoute
          exact
          path='/shopApp/adminPanel'
          component={AdminPanel}
          />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
