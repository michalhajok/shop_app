import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../../redux/products/actions";

const AdminPanel = () => {
  const [users, setUsers] = useState([])
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.fetchProducts(""));
    fetch('http://192.168.0.11:4000/user/')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  }, [dispatch]);

  return (
    <div className="adminPanel">
      <div>Users:{users.map(user =>
      <div key={user.email}>{user.name}</div>
      )}</div>
      <div>
        Products:
        {products.products.map((product) => (
          <div key={product._id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
