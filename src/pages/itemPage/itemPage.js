import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import actions from "../../redux/product/actions";
import Nav from "../../components/organisms/nav";
import LoaderExample from "../../components/atoms/loader";
import Footer from "../../components/organisms/footer";

const ItemPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const { isLoading, product } = state;
  const { title, picture, description, brand, price } = product;
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(actions.ProductFetch(params._id))
  }, [ dispatch, params._id]);

  return (
    <div>
      <Nav />
      <div>
        {isLoading ? (
          <LoaderExample />
        ) : (
          <div>
            <section>
              <figure>
                {picture.map((image) => (
                  <img key={image} src={image} alt="img" />
                ))}
              </figure>
              <figure>
                <img src={image ? image : picture[0]} alt="img" />
              </figure>
            </section>
            <main>
              <h2>
                {brand}
              </h2>
              <h3>{title}</h3>
              <p>{price} zł</p>
              <p>{description}</p>
            </main>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ItemPage;
