import React from 'react';
import './Reorder.css';

function Reorder({ onReorder }) {
  return (
    <button className="reorder" onClick={onReorder}>
      Reorder
    </button>
  );
}

export default Reorder;



