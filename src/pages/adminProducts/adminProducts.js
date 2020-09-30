import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import productsActions from "../../redux/products/actions";

import Nav from "../../components/organisms/nav";
import Loader from "../../components/atoms/loader";
import ListOfProducts from "../../components/molecules/listOfProducts";
import FilterProducts from "../../components/molecules/filterProducts";
import Footer from "../../components/organisms/footer";

import "./adminProducts.scss";

const AdminProducts = () => {
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    title: "",
  });
  const _products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.fetchProducts(""));
  }, [dispatch]);

  const changeFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const { isLoading, products } = _products;

  return (
    <div className="adminProducts">
      <Nav />
      <div className="adminProduct__itemList">
        <FilterProducts changeFilters={changeFilters} filters={filters} />
        {isLoading ? (
          <Loader />
        ) : (
          <ListOfProducts products={products} filters={filters} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminProducts;
