import React, { useState } from "react";

import { useDispatch } from "react-redux";
import brandsActions from "../../redux/brands/actions";

import { Link } from "react-router-dom";
import Modal from "react-modal";

import Nav from "../../components/organisms/nav";
import Footer from "../../components/organisms/footer";

import "./adminPanel.scss";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState({
    category: "",
  });

  const addBrand = (e) => {
    e.preventDefault();
    dispatch(brandsActions.addBrand(brand));
  };

  return (
    <div className="adminPanel">
      <Nav />
      <div className="adminPanel__modules">
        <div>
          <Link to="/shopApp/adminPanel/products">Products</Link>
        </div>
        <div>
          <Link to="/shopApp/adminPanel/users">Users</Link>
        </div>
        <div>
          <div onClick={() => setIsOpen(true)}>Brands</div>
          <div>Currency</div>
        </div>
      </div>
      <Footer />
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <form onSubmit={addBrand}>
          <label>
            Brand
            <input
              type="text"
              required
              minLength="2"
              value={brand.category}
              onChange={(e) => setBrand({ category: e.target.value })}
            />
          </label>
          <button type="submit">Add brand</button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminPanel;
