import React from 'react';

import './button.scss';

function Button({ children, click, className }) {
    return (
        <button onClick={click} type='button' className={`btn ${className}`}>
            {children}
        </button>
    );
}

export default Button;
