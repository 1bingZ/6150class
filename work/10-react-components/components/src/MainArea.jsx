import React from 'react';
import './MainArea.css';
import Buttons from './Buttons';
import { useState } from 'react';

function MainArea({ currentPage }) {
    // display different page Based on the variable （currentPage）
    const renderContent = () => {
        switch (currentPage) {

            case 'home':
                return (
                    <div>
                        <p>
                            mages and videos of domestic cats make up some of the most viewed content on the World Wide Web. ThoughtCatalog has described cats as the "unofficial mascot of the Internet".
                        </p>
                        <p>
                            Some argue that there is a depth and complexity to this seemingly simple content, with a suggestion that the positive psychological effects that pets have on their owners also hold true for cat images viewed online.Research has suggested that viewing online cat media is related to positive emotions, and that it even may work as a form of digital therapy or stress relief for some users. Some elements of research also shows that feelings of guilt when postponing tasks can be reduced by viewing cat content.
                        </p>
                        <p>
                            The subject has attracted the attention of various scholars and critics, who have analysed why this subject has reached iconic status. Although it may be considered frivolous, cat-related Internet content contributes to how people interact with media and culture.
                        </p>
                        <p>
                            Some individual cats, such as Grumpy Cat and Lil Bub, have achieved popularity online because of their unusual appearances and funny cat videos.
                        </p>
                    </div>
                );


            case 'about':
                // define state to control modal visibility
                const [isModalOpen, setIsModalOpen] = useState(false);

                // define function to open the modal
                const openModal = () => {
                    setIsModalOpen(true);
                };

                // define function to close the modal
                const closeModal = () => {
                    setIsModalOpen(false);
                };
                return (

                    <div>
                        {isModalOpen && (
                            <div>
                                
                                {/* background dark */}
                                <div className='modal-overlay'></div>

                                {/* modal display */}
                                <div className="modal" aria-hidden="true">
                                    <div className="modal-content">
                                        <form className="subscribe-form" action="/subscribe" method="POST">
                                            <h3>Subscribe to the Latest Mews!</h3>

                                            {/* Email */}
                                            <label className="subscribe_label">
                                                <span>Email: <em>*required</em></span>
                                                <input id="email" name="email" className="email" />
                                                <div className="email_error"></div>
                                            </label>

                                            {/* Confirm Email */}
                                            <label className="subscribe_label">
                                                <span>Confirm Email: <em>*required</em></span>
                                                <input id="confirm" name="confirm" className="confirm" />
                                                <div className="confirm_error"></div>
                                            </label>
                                            <br />

                                            <div className="button-container">
                                                <Buttons type="submit" visual='button' className="subscribe-button">Subscribe</Buttons>
                                                <Buttons type="button" visual='button' onClick={closeModal} className="cancel">Cancel</Buttons>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        )}

                        <div className='card'>

                            <div className="grid-container">
                                <div className="item">
                                    <h2>Jorts</h2>
                                    <img src="/img/card.jpg" alt="Jorts" />
                                    <p>
                                        Dolor nulla repellendus quisquam optio in. In optio distinction
                                        <br />
                                        Ipsum lorem sit
                                        <Buttons type="button" visual="link" onClick={openModal}>Subscribe</Buttons>
                                        voluptate inventore.
                                    </p>
                                </div>
                            </div>

                            <div className="grid-container">
                                <div className="item">
                                    <h2>Jorts</h2>
                                    <img src="/img/card.jpg" alt="Jorts" />
                                    <p>
                                        Dolor nulla repellendus quisquam optio in. In optio distinction
                                        <br />
                                        Ipsum lorem sit <Buttons type="button" visual="link" onClick={openModal}>Subscribe</Buttons>  voluptate inventore.
                                    </p>
                                </div>
                            </div>

                            <div className="grid-container">
                                <div className="item">
                                    <h2>Jorts</h2>
                                    <img src="/img/card.jpg" alt="Jorts" />
                                    <p>
                                        Dolor nulla repellendus quisquam optio in. In optio distinction
                                        <br />
                                        Ipsum lorem sit <Buttons type="button" visual="link" onClick={openModal}>Subscribe</Buttons>  voluptate inventore.
                                    </p>
                                </div>
                            </div>

                            <div className="grid-container">
                                <div className="item">
                                    <h2>Jorts</h2>
                                    <img src="/img/card.jpg" alt="Jorts" />
                                    <p>
                                        Dolor nulla repellendus quisquam optio in. In optio distinction
                                        <br />
                                        Ipsum lorem sit <Buttons type="button" visual="link" onClick={openModal}>Subscribe</Buttons>  voluptate inventore.
                                    </p>
                                </div>
                            </div>

                            <div className="grid-container">
                                <div className="item">
                                    <h2>Jorts</h2>
                                    <img src="/img/card.jpg" alt="Jorts" />
                                    <p>
                                        Dolor nulla repellendus quisquam optio in. In optio distinction
                                        <br />
                                        Ipsum lorem sit <Buttons type="button" visual="link" onClick={openModal}>Subscribe</Buttons>  voluptate inventore.
                                    </p>
                                </div>
                            </div>

                            <div className="grid-container">
                                <div className="item">
                                    <h2>Jorts</h2>
                                    <img src="/img/card.jpg" alt="Jorts" />
                                    <p>
                                        Dolor nulla repellendus quisquam optio in. In optio distinction
                                        <br />
                                        Ipsum lorem sit <Buttons type="button" visual="link" onClick={openModal}>Subscribe</Buttons>  voluptate inventore.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                );


            case 'cats':
                return (
                    <div>
                        <section className="panel">
                            <div>
                                <h2>Long time Internet Subjects</h2>
                                <p>
                                    Adipiscing obcaecati prasentium repellendus a iusto Debitis nesciut eius laborum nostrum illo llo aliquid amet.
                                    <br /><br />
                                    Elit necessitatibus inventore sed aliquid magna eos. velit nisi Ea distinction itaque suscipit animi voluptate.
                                    <br /><br />
                                    Elit quas silique pariartur eaiqe adispisicing Enim delectus neque rerum sed nobis Dolor suscipit nulla?
                                </p>
                            </div>
                            <img className="pic" src="/img/card.jpg" alt="cat" />
                        </section>

                        <section className="panel">
                            <img className="pic" src="/img/card.jpg" alt="cat" />
                            <div>
                                <h2>Long time Internet Subjects</h2>
                                <p>
                                    Adipiscing obcaecati prasentium repellendus a iusto Debitis nesciut eius laborum nostrum illo llo aliquid amet.
                                    <br /><br />
                                    Elit necessitatibus inventore sed aliquid magna eos. velit nisi Ea distinction itaque suscipit animi voluptate.
                                    <br /><br />
                                    Elit quas silique pariartur eaiqe adispisicing Enim delectus neque rerum sed nobis Dolor suscipit nulla?
                                </p>
                            </div>
                        </section>
                    </div>
                );

            default:
                return <p>Page not found!</p>;

        }
    }

    return (
        <div className="main-area">
            {renderContent()}
        </div>
    );
}

export default MainArea;