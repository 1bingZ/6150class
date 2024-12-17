import React from 'react';
import './Buttons.css';


function Buttons({ type = "button", visual = "button", onClick, children }) {
  return (
    <button
      type={type} 
      onClick={onClick} 
      className={`button ${visual === "link" ? "button--link" : "button--default"}`}
    >
      {children}
    </button>
  );
}


export default Buttons;