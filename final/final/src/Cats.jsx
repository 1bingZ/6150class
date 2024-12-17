import React, { useState } from 'react';
import Buttons from './Buttons';
import Modal from './Modal';
import './Adopt.css';

function Cats() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal switchShow={setIsModalOpen} isModalOpen={isModalOpen} ></Modal>

            <div className="card">
                <div className="grid-container">
                    <div className="item">
                        <h2>Romy</h2>
                        <img src="/img/cat1.jpg" alt="A cat named Romy" />
                        <ul>
                            3 years 4 months old <br />Cat <br />Female domestic shorthair <br /> Received on 9/28/2024<br />
                        </ul>
                        <div>
                            You can <Buttons type="button" visual="button" onClick={openModal}>Adopt Now</Buttons>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="item">
                        <h2>Jorts</h2>
                        <img src="/img/cat2.jpg" alt="A cat named Jorts" />
                        <ul>
                            1 years 1 months old <br />Cat <br />Male domestic shorthair <br /> Received on 9/2/2024<br />
                        </ul>
                        <div>
                            You can <Buttons type="button" visual="button" onClick={openModal}>Adopt Now</Buttons>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="item">
                        <h2>Fig</h2>
                        <img src="/img/cat3.jpg" alt="A cat named Fig" />
                        <ul>
                            2 years 4 months old <br />Cat <br />Female domestic shorthair <br /> Received on 8/18/2024<br />
                        </ul>
                        <div>
                            You can <Buttons type="button" visual="button" onClick={openModal}>Adopt Now</Buttons>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="item">
                        <h2>Romy</h2>
                        <img src="/img/cat1.jpg" alt="A cat named Romy" />
                        <ul>
                            3 years 4 months old <br />Cat <br />Female domestic shorthair <br /> Received on 9/28/2024<br />
                        </ul>
                        <div>
                            You can <Buttons type="button" visual="button" onClick={openModal}>Adopt Now</Buttons>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="item">
                        <h2>Jorts</h2>
                        <img src="/img/cat2.jpg" alt="A cat named Jorts" />
                        <ul>
                            1 years 1 months old <br />Cat <br />Male domestic shorthair <br /> Received on 9/2/2024<br />
                        </ul>
                        <div>
                            You can <Buttons type="button" visual="button" onClick={openModal}>Adopt Now</Buttons>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="item">
                        <h2>Fig</h2>
                        <img src="/img/cat3.jpg" alt="A cat named Fig" />
                        <ul>
                            2 years 4 months old <br />Cat <br />Female domestic shorthair <br /> Received on 8/18/2024<br />
                        </ul>
                        <div>
                            You can <Buttons type="button" visual="button" onClick={openModal}>Adopt Now</Buttons>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Cats;