import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";
import { PublicRoute } from "./routes";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";

import "./App.scss";

function App() {

  return (
    <BrowserRouter className="App" >
      <Switch>
        <PublicRoute exact restricted={false} path="/shopApp/" component={HomePage} />
        <PublicRoute
          restricted={false}
          path="/shopApp/login"
          component={LoginPage}
        />
        <PublicRoute
          restricted={true}
          path="/shopApp/products/:category"
          component={ProductsPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
