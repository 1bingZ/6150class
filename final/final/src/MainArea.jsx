import React from 'react';
// import './MainArea.css';
import Home from './Home';
import Adopt from './Adopt';
import Donate from './Donate';
import Cats from './Cats';
import Dogs from './Dogs';
import AdoptProcess from './AdoptProcess';
import { useState } from 'react';

function MainArea({ currentPage }) {

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'adopt':
        return <Adopt />;
      case 'donate':
        return <Donate />;
      case 'adoptprocess':
        return <AdoptProcess />;
      case 'cats':
        return <Cats />;
      case 'dogs':
        return <Dogs />;
    }
  };

  return <div className="main-area">{renderContent()}</div>;
}

export default MainArea;

