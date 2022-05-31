import React, { useState, useEffect } from "react";

import Nav from "../../components/organisms/nav";
import Back from "../../components/atoms/back";
import Footer from "../../components/organisms/footer";

import "./adminUsers.scss";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://shopappbackend.herokuapp.com/user/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="adminUsers">
      <Nav />
      <div className="adminUsers__content">
        <Back />
        <p className="content__user">Users: {users.length}</p>
        <div className="content__userList">
          {users.map((user) => (
            <div className="userList__item" key={user.email}>
              <p>
                Login: <b>{user.name}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminUsers;
