import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";
import RegisterPage from "./pages/registerPage";
import ItemPage from "./pages/itemPage";
import BasketPage from "./pages/basketPage";
import StatutePage from "./pages/statutePage";
import ContactPage from "./pages/contactPage"
import OrderPage from "./pages/orderPage";

import otherActions from './redux/other/actions'
import ProtectedRoute from "./routes/protected";

import "./App.scss";
import MyAccountPage from "./pages/myAccountPage/myAccountPage";

function App() {
    const dispatch = useDispatch()
    
    const user = useSelector(state => state.auth)
    
    console.log(user);
    
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
                    element={
                        <ProtectedRoute user={!user.isAuth}>
                            <LoginPage  />
                        </ProtectedRoute>
                    }
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
                    element={
                        <ProtectedRoute user={!user.isAuth}>
                            <RegisterPage />
                        </ProtectedRoute>
                    }
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
                <Route exact path="/shop_app/order" element={
                    <ProtectedRoute user={user.isAuth}>
                        <OrderPage />
                    </ProtectedRoute>
                } />
                <Route exact path="/shop_app/myAccount" element={
                    <ProtectedRoute user={user.isAuth}>
                        <MyAccountPage />
                    </ProtectedRoute>
                } />
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
