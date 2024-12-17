import React from 'react';
import Buttons from './Buttons';
import Modal from './Modal';
import "./Donate.css";
import { useState } from 'react';

function Donate() {

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };


  return (
    <div className='donate'>
      <h2>
        Join our family and Save Lives  –  Every Day, All Year
      </h2>

      <Buttons type="button" onClick={openModal}>Donate Now </Buttons>
      <Modal switchShow={setIsModalOpen} isModalOpen={isModalOpen} />

      <p>
        Making a monthly gift to Seattle Humane is the most <strong>convenient </strong> and <strong>effective</strong> way to provide continual support to pets in need.
        Your gift can be spread out throughout the year, so even small,
        affordable donations can make a real long-term impact — creating a more equitable and humane world today and in the future.

        <Buttons type="button" visual="button" onClick={togglePanel}>
          {isPanelOpen ? "Hide Information" : "See More Information"}
        </Buttons>
        {/* <Buttons type="button" visual="button" onClick={openModal}>See More Information</Buttons> */}
      </p>



      <h3>
        You can give financial gifts online using a credit or debit card. Your donation can be designated for any one of four funds
      </h3>

      {isPanelOpen && (
        <section className="panel">
          <div>
            <ul>
              <strong>Pet Benefit Bequest Fund: </strong> An overall donation account that may be used for any program, service or purchase that benefits the animals including, but not limited to, facility improvements, services for hard-to-place animals, or any of the services outlined in the Spay/Neuter, Help the Animals, or Animal Retention funds.
              <br /><br />
              <strong>Angel Fund:</strong> Donations may be used to provide shelter and/or veterinary care for abused animals or pay for medical care associated with rehabilitating sick and injured animals through our Foster Care Program.
              <br /><br />
              <strong>Animal Retention Fund: </strong> Donations may be used for such activities as developing public education videos, advertisements, classes, or other programs that promote responsible pet ownership or provide tools for correcting animal behavior.
              <br /><br />
              <strong>Spay and Neuter Fund: </strong> Donations may be used to pay or offset the cost of spaying and neutering of pets, promote public awareness about the benefits and importance of spaying and neutering, or to purchase new spay and neuter equipment that may not otherwise be obtained.
            </ul>
          </div>
        </section>
      )}

      <h3>
        Of course, you can also donate physical gifts ：）
      </h3>

      {isPanelOpen && (
        <section className="panel">
          <div>
            <div>For Cats</div>
            <ul>
              <li>Gerber brand meat baby food in jars (no onion powder)</li><br />
              <li>Canned cat food (preferably three-ounce pop-top cans of Sheba or Fancy Feast paté)</li><br />
              <li>Canned plain pumpkin (NOT pumpkin pie filling)</li><br />
              <li>Ping pong balls</li><br />
              <li>Scratching posts</li>
            </ul>
          </div>
        </section>
      )}

      {isPanelOpen && (
        <section className="panel">
          <div>
            <div>For Dogs</div>
            <ul>
              <li>GLarge and extra large size Kongs</li><br />
              <li>Fleece blankets</li><br />
              <li>Canned paté-style dog food</li><br />
              <li>Soft dog training treats</li><br />
              <li>Low sodium bouillon cubes (for enrichment)</li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

export default Donate;