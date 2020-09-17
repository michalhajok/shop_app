import React, { useState } from "react";

const RegisterForm = () => {
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
    <div className="registerPage__registerForm">
      <form onSubmit={addUser}>
        <label>
          <p>Email:</p>
          <input
            required
            name="email"
            type="email"
            value={email}
            onChange={handleUser}
          />
        </label>
        <label>
            <p>Password:</p>
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
          <p>Name:</p>
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
          <p>Lastname:</p>
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
          <p>Sex:</p>
          <select name="sex" value={sex} onChange={handleUser}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </label>
        <label>
          <p>Birthday:</p>
          <input
            required
            name="birthday"
            type="date"
            value={birthday}
            onChange={handleUser}
          />
        </label>
        <label>
          <p>Phone number:</p>
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
          <p>City:</p>
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
          <p>Address:</p>
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
    </div>
  );
};

export default RegisterForm;
