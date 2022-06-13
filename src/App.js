import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";
import RegisterPage from "./pages/registerPage";
import ItemPage from "./pages/itemPage";
import BasketPage from "./pages/basketPage";
import StatutePage from "./pages/statutePage/statutePage";
import ContactPage from "./pages/contactPage/contactPage";

import otherActions from './redux/other/actions'

import "./App.scss";

function App() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(otherActions.searchDelivery())
        dispatch(otherActions.searchPayments())
    }, [dispatch])
    
    
    return (
        <BrowserRouter>
            <Routes className="App">
                <Route exact path="/shop_app/" element={<HomePage />} />
                <Route
                    exact
                    restricted={false}
                    path="/shop_app/login"
                    element={<LoginPage  />}
                />
                <Route
                    exact
                    path="/shop_app/products/:category"
                    element={<ProductsPage />}
                />
                <Route
                    exact
                    restricted={true}
                    path="/shop_app/register"
                    element={<RegisterPage />}
                />
                <Route
                    exact
                    path="/shop_app/products/:category/:_id"
                    element={<ItemPage />}
                />
                <Route
                    exact
                    path="/shop_app/statute"
                    element={<StatutePage />}
                />
                <Route exact path="/shop_app/card" element={<BasketPage />} />
                <Route exact path="/shop_app/contact" element={<ContactPage />} />
                {/* <Route path="*">
                <div>
                    <p>404 </p>
                </div>
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
