import React from "react";

import { useParams } from "react-router-dom";

import Nav from "../../components/organisms/nav";

const ProductsPage = () => {
  const params = useParams();

  return (
    <div>
      <Nav />
      {params.category}
    </div>
  );
};

export default ProductsPage;
