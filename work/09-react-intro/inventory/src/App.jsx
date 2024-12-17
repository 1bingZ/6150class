import React from 'react';
import Reorder from './Reorder';
import { useState } from 'react';
import './Reorder.css';
import './App.css'; 
import  pic1 from './pic1.png';

function App() {
 
  const [count, setCount] = useState(0);

  // define increase & decrease & resetCount function 
  function increse() {
      setCount(count + 1);
  }

  function decrese() {
      if (count > 0)
         setCount(count - 1);
  }

  function resetCount() {
      setCount(5);
  }


  return (
      <div id='item'>

        <img src={pic1} alt="Inventory Image" />   
        <p>Inventory count: {count}</p>
        <div>
          <button onClick={increse}>+</button>
          <button onClick={decrese} disabled={!count} >-</button>
          {count === 0 ? <Reorder onReorder={resetCount} /> : null}
        </div>
        


      </div>
  );
}

export default App;

