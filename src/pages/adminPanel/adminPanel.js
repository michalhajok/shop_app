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
