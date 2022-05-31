import React from "react";
import { Link } from "react-router-dom";

import "./dropdown.scss";

const Dropdown = ({ list, to, title, className }) => {
    return (
        <div className={`dropdown ${className}`}>
            <div className="dropdown__title" >{title}</div>
            <div className="dropdown__content">
                {list.map((item) => (
                <Link className="content__link" to={`${to}${item.toLowerCase()}`} key={item}>
                    {item}
                </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
