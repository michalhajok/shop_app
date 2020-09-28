import React, { useState, useEffect } from "react";

import Nav from "../../components/organisms/nav";
import Back from "../../components/atoms/back";
import Footer from "../../components/organisms/footer";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.11:4000/user/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav />
      <Back />
      <div>
        Users:
        {users.map((user) => (
          <div key={user.email}>{user.name}</div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AdminUsers;
