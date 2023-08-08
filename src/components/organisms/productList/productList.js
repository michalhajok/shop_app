import React from "react";

import ProductItem from "../../molecules/productItem";

import "./productList.scss";

function ProductList({ products }) {
    return (
        <div className="productList">
        {products.map((product) => (
            <ProductItem product={product} key={product?._id} />
        ))}
        </div>
    );
}

export default ProductList;
