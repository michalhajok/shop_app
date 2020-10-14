import React, { useState } from "react";

import { useDispatch } from "react-redux";
import brandsActions from "../../redux/brands/actions";

import { Link } from "react-router-dom";

import Nav from "../../components/organisms/nav";
import AddBrand from "../../components/organisms/addBrand";
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
    setTimeout(() => {
      dispatch(brandsActions.fetchData());
    }, 1 * 1000);
  };

  return (
    <div className="adminPanel">
      <Nav />
      <div className="adminPanel__modules">
        <Link to="/shop_app/adminPanel/products" className="modules__item">
          Products
        </Link>
        <Link to="/shop_app/adminPanel/users" className="modules__item">
          Users
        </Link>
        <div onClick={() => setIsOpen(true)} className="modules__item">
          Brand
        </div>
      </div>
      <Footer />
      <AddBrand
        isOpen={isOpen}
        setBrand={setBrand}
        addBrand={addBrand}
        brand={brand}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AdminPanel;
