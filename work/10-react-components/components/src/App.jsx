import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import './Header.css';
import Footer from './Footer.jsx';
import './Footer.css';
import MainArea from './MainArea.jsx';
import './MainArea.css';


function App() {

  const [currentPage, setCurrentPage] = useState('home');


  return (
      <div className="App">
          <Header setCurrentPage={ setCurrentPage  }  />


          <MainArea currentPage={ currentPage } />
          

          <Footer />
      </div>
  );
}

export default App;

