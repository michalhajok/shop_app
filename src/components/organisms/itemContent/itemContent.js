import React from "react";

import ItemFigure from "../../molecules/itemFigure";
import ItemDetails from '../../molecules/itemDetails'

import "./itemContent.scss";

const ItemContent = ({ product }) => {
  const { picture } = product;

  return (
    <div className="itemPage--content">
      <ItemFigure picture={picture} />
      <ItemDetails product={product} />
    </div>
  );
};

export default ItemContent;
