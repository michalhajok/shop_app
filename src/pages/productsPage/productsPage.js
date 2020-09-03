import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "../../components/organisms/nav";

const ProductsPage = () => {
  const params = useParams();
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <Nav />
      {products.map((product) => (
        <div key={product?._id}>{product?.title}</div>
      ))}
    </div>
  );
};

export default ProductsPage;
