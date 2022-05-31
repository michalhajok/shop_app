import React from "react";

import "./button.scss";

const Button = ({ children, type, click, className }) => {
  return (
    <button onClick={click} type={type} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
