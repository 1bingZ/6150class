import React from 'react';
import { useState } from 'react';
import Buttons from './Buttons';
import './Header.css';


function Header({ setCurrentPage }) {


    // create a array
    const menu = [
        {
            name: "Home",
            path: "#home",
        },
        {
            name: "About",
            path: "#about",
        },
        {
            name: "Cats",
            path: "#cats",
        },
    ];

    // Use map to create a new array list based on menu and return it to the header
    const list = menu.map(item => {
        return (
            <li key={item.name} className="global-nav__item">
                <a className="global-nav__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });

    // define state to set display/close nav
    const [showMenu, setShowMenu] = useState(false);

    //define fuction to show/close header default button when it onclick
    function buttonclick() {
        setShowMenu(!showMenu);
    }
 
    // define fuction to change page 
    function handlePageChange(page) {
        setCurrentPage(page);
    }


    return (
        <header>

            <div className='title'>
                <img src="/img/logo.jpg" alt="a cat as logo" />
                <h1>Cats Power the Internet</h1>
            </div>

            <Buttons type="button" visual="button" onClick={buttonclick}>
                {showMenu ? 'Close Menu' : 'Open Menu'}
            </Buttons>

            <nav className='global-nav'>
                {showMenu && menu.map(item => (
                    <li key={item.name} className="global-nav__item">
                        <a className="global-nav__link" href={item.path} 
                            onClick={() =>handlePageChange(item.name.toLowerCase())}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </nav>

        </header>
    );
}

export default Header;


