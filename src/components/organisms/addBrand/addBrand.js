import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import brandsAction from "../../../redux/brands/actions";

import Modal from "react-modal";

import "./addBrand.scss";

const AddBrand = ({ isOpen, addBrand, brand, setBrand, setIsOpen }) => {
  const dispatch = useDispatch();
  const brandList = useSelector((state) => state.brands.brands);
  const { category } = brand;

  useEffect(() => {
    dispatch(brandsAction.fetchData());
  }, [dispatch]);

  return (
    <Modal
      className="brandModal"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <div>
        <section className="brandModal__close">
          <button onClick={() => setIsOpen(false)}>Close</button>
        </section>
        <form onSubmit={addBrand} className="brandModal__form">
          <label>
            Brand:{" "}
            <input
              type="text"
              placeholder="brand"
              required
              minLength="2"
              value={category}
              onChange={(e) => setBrand({ category: e.target.value })}
            />
          </label>
          <button type="submit">Add brand</button>
        </form>
        <main className="brandModal__brandList">
          {brandList.map(({ _id, category }) => (
            <div key={_id} className="brandList__item">
              {category}
            </div>
          ))}
        </main>
      </div>
    </Modal>
  );
};

export default AddBrand;
