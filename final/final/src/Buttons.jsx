import React from 'react';
import './Buttons.css';


function Buttons({ type = "button", visual = "other", onClick, children }) {
  return (
    <button
      type={type} 
      onClick={onClick} 
      // className={`button ${visual === "link" ? "button--link" : "button--default" }`}
      className={`button ${
        visual === "link"
          ? "button--link"
          : visual === "button"
          ? "button--default"
          : "button--other"
      }`}
    >
      {children}
    </button>
  );
}


export default Buttons;