import React, { useState } from "react";

import Nav from "../../components/organisms/nav";
import Footer from "../../components/organisms/footer";

const RegisterPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    sex: "",
    birthday: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = (e) => {
    e.preventDefault();
    setUser({
      email: "",
      password: "",
      name: "",
      lastname: "",
      sex: "",
      birthday: "",
      phone: "",
      city: "",
      address: "",
    });
  };

  const {
    email,
    password,
    name,
    lastname,
    sex,
    birthday,
    phone,
    city,
    address,
  } = user;

  return (
    <div>
      <Nav />
      <form onSubmit={addUser}>
        <label>
          Email:
          <input
            required
            name="email"
            type="email"
            value={email}
            onChange={handleUser}
          />
        </label>
        <label>
          Password:
          <input
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            required
            name="password"
            type="password"
            minLength="8"
            value={password}
            onChange={handleUser}
          />
        </label>
        <label>
          Name:
          <input
            pattern="[A-Za-z]"
            required
            name="name"
            type="text"
            value={name}
            onChange={handleUser}
          />
        </label>
        <label>
          Lastname:
          <input
            pattern="[A-Za-z]"
            required
            name="lastname"
            type="text"
            value={lastname}
            onChange={handleUser}
          />
        </label>
        <label>
          Sex:
          <select name="sex" value={sex} onChange={handleUser}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </label>
        <label>
          Birthday:
          <input
            required
            name="birthday"
            type="date"
            value={birthday}
            onChange={handleUser}
          />
        </label>
        <label>
          Phone number:
          <input
            required
            name="phone"
            type="number"
            maxLength="12"
            minLength="7"
            value={phone}
            onChange={handleUser}
          />
        </label>
        <label>
          City:
          <input
            pattern="[A-Za-z]"
            required
            name="city"
            type="text"
            value={city}
            onChange={handleUser}
          />
        </label>
        <label>
          Address:
          <input
            required
            name="address"
            type="text"
            value={address}
            onChange={handleUser}
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <Footer />
    </div>
  );
};

export default RegisterPage;
