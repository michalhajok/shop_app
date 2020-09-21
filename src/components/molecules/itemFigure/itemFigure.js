import React, { useState } from "react";

import "./itemFigure.scss";

const ItemFigure = ({ picture }) => {
  const [image, setImage] = useState("");

  return (
    <section className="itemPage__section--figures">
      <figure className="figures__mini">
        {picture.map((image) => (
          <figure key={image}>
            <img src={image} onMouseOver={() => setImage(image)} alt="img" />
          </figure>
        ))}
      </figure>
      <figure className="figures__main">
        <img src={image ? image : picture[0]} alt="img" />
      </figure>
    </section>
  );
};

export default ItemFigure;
