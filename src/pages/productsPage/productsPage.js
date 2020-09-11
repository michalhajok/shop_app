import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../../redux/products/actions";

import Nav from "../../components/organisms/nav";
import ProductList from "../../components/organisms/productList";
import Footer from "../../components/organisms/footer";

const ProductsPage = () => {
  const params = useParams();
  const reducer = useSelector((state) => state.products);
  const { products, isLoading } = reducer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.fetchProducts(params.category));
  }, [dispatch, params.category]);

  return (
    <div>
      <Nav />
      <div>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
