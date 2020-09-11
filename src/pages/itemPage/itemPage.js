import React from "react";
import { useParams } from "react-router-dom";

import Nav from "../../components/organisms/nav";
import Footer from "../../components/organisms/footer";
import { useEffect } from "react";
import { useState } from "react";

const ItemPage = () => {
  const params = useParams();

  const [item, setItem] = useState({})

  useEffect(() => {
      fetch(`http://localhost:4000/products/product/${params._id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => {
          console.log(err)
      })
  }, [params._id])

  return (
    <div>
      <Nav />
      {item.title}
      <Footer />
    </div>
  );
};

export default ItemPage;
