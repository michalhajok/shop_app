import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import productActions from "../../redux/product/actions";
import brandsActions from "../../redux/brands/actions";

import { useParams } from "react-router-dom";

import Nav from "../../components/organisms/nav";
import Loader from "../../components/atoms/loader";
import ItemDetail from "../../components/organisms/itemDetail";
import ItemModal from "../../components/organisms/itemModal";
import Footer from "../../components/organisms/footer";

import "./adminItem.scss";

const AdminItem = () => {
  const dispatch = useDispatch();
  const _product = useSelector((state) => state.product);
  const brandList = useSelector((state) => state.brands.brands);
  const { isLoading, product } = _product;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warning, setWarning] = useState(false);
  const [item, setItem] = useState({
    size: [],
    picture: [],
  });
  const { brand, size, picture } = item;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(productActions.ProductFetch(id));
    dispatch(brandsActions.fetchData());
  }, [dispatch, id]);

  const openModal = () => {
    setItem(product);
    setModalIsOpen(true);
    setWarning(false);
  };

  const changeItem = (e, index) => {
    if (e.target.name === "size") {
      let arraySize = size;
      size[index].quantity = e.target.value;
      setItem({
        ...item,
        size: arraySize,
      });
    } else if (e.target.name === "picture") {
      let arrayPicture = picture;
      picture[index] = e.target.value;
      setItem({
        ...item,
        picture: arrayPicture,
      });
    } else {
      setItem({
        ...item,
        [e.target.name]: e.target.value,
      });
    }
  };

  const update = () => {
    dispatch(productActions.productUpdate(id, item));
    setModalIsOpen(false);
    setWarning(false);
  };

  const saveUpdate = () => {
    let list = brandList.filter(({ category }) => category === brand);
    list.length > 0 ? update() : setWarning(true);
  };

  return (
    <div className="adminItem">
      <Nav />
      <div className="adminItem__content">
        {isLoading ? (
          <Loader />
        ) : (
          <ItemDetail product={product} openModal={openModal} />
        )}
      </div>
      <ItemModal
        setModalIsOpen={setModalIsOpen}
        item={item}
        saveUpdate={saveUpdate}
        changeItem={changeItem}
        warning={warning}
        modalIsOpen={modalIsOpen}
        brandList={brandList}
      />

      <Footer />
    </div>
  );
};

export default AdminItem;
