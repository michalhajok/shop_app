import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productsActions from "../../redux/products/actions";

import Nav from "../../components/organisms/nav";
import Loader from "../../components/atoms/loader";
import Back from "../../components/atoms/back";
import Footer from "../../components/organisms/footer";

import "./adminProducts.scss";

const AdminProducts = () => {
  const _products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.fetchProducts(""));
  }, [dispatch]);

  const { isLoading, products } = _products;

  return (
    <div className="adminProducts">
      <Nav />
      <div className="adminProduct__itemList">
        <Back />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="itemList">
            <div className="filter"></div>
            {products.map((product) => (
              <Link
                className="itemList--item"
                to={`/shopApp/adminPanel/product/${product._id}`}
                key={product._id}
              >
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminProducts;
