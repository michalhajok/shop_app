import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/shopApp/" component={HomePage} />
        <Route exact path="/shopApp/login" component={LoginPage} />
        <Route
          exact
          path="/shopApp/products/:category"
          component={ProductsPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
