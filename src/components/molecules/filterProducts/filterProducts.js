import React from "react";

import "./filterProducts.scss";

const FilterProducts = ({ filters, changeFilters }) => {
  const { brand, category, title } = filters;

  return (
    <div className="filter">
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={changeFilters}
            autoComplete="off"
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={changeFilters}
            autoComplete="off"
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={category}
            onChange={changeFilters}
            autoComplete="off"
          />
        </label>
      </form>
    </div>
  );
};

export default FilterProducts;
