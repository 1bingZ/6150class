import React, { useState } from 'react';
import Buttons from './Buttons';
import './Header.css';
import Modal from './Modal';
import './Modal.css';

function Header({ setCurrentPage }) {
    const [isNavOpen, setIsNavOpen] = useState(false); 
    const [activeSubMenu, setActiveSubMenu] = useState(null); 

    const global_nav = [
        {
            name: "Home",
            path: "#home",
        },
        {
            name: "Adopt",
            path: "#adopt",
            subMenu: [
                { name: "AdoptProcess", path: "#adoptprocess" },
                { name: "Dogs", path: "#dogs" },
                { name: "Cats", path: "#cats" },
            ]
        },
        {
            name: "Donate",
            path: "#donate",
        },
    ];

    const list = global_nav.map(item => {
        return (
            <li key={item.name} className="global-nav__item">
                <a className="global-nav__link" href={item.path} onClick={() => handlePageChange(item.name.toLowerCase())} >
                    {item.name}
                    {item.name === "Adopt" && <img src="./img/arrow.svg" alt="down arrow" className="arrow-icon" />}
                </a>

                {/* judge if have sub-menu */}
                {item.subMenu && (
                    <ul 
                        className={`sub-menu ${activeSubMenu === item.name ? 'open' : ''}`} 
                        onClick={() => handleSubMenuToggle(item.name)}
                    >
                        {item.subMenu.map(subItem => (
                            <li key={subItem.name} className="sub-menu__item">
                                <a className="sub-menu__link" href={subItem.path} onClick={() => handlePageChange(subItem.name.toLowerCase())}>
                                    {subItem.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    });

    function handlePageChange(page) {
        setCurrentPage(page);
        setIsNavOpen(false); 
    }

    function handleSubMenuToggle(menuName) {
        setActiveSubMenu(prevMenu => prevMenu === menuName ? null : menuName);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleNav = () => setIsNavOpen(prev => !prev); 

    return (
        <header>
            <div className='header-nav'>
                <img src="/img/logo.jpg" alt="pets as logo" />
                <div className="hamburger" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`global-nav ${isNavOpen ? 'global-nav--open' : ''}`}>
                    {list}
                </nav>

                <div className='login'>
                    <Buttons type="button" visual="link" onClick={openModal} className='login'>Login Now</Buttons>
                </div>

                <Modal switchShow={setIsModalOpen} isModalOpen={isModalOpen} />
            </div>

            <div className='header-title'>
                <img src="./img/pic1.jpg" alt="header-title-pic" />
                <h1>When you’re ready to show love, <br />they’re ready to give it.</h1>
            </div>
        </header>
    );
}

export default Header;