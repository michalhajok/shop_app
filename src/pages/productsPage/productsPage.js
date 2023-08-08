import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../../redux/products/actions";

import Nav from "../../components/organisms/nav";
import LoaderExample from "../../components/atoms/loader";
import ProductList from "../../components/organisms/productList";
import Footer from "../../components/organisms/footer";

import "./productsPage.scss";

function ProductsPage() {
    const params = useParams();
    const reducer = useSelector((state) => state.products);
    const { products, isLoading } = reducer;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.fetchProducts(params.category));
    }, [dispatch, params.category]);

    return (
        <div className="productsPage">
        <Nav />
        <div className="productsPage__content">
            {isLoading ? <LoaderExample /> : <ProductList products={products} />}
        </div>
        <Footer />
        </div>
    );
}

export default ProductsPage;
