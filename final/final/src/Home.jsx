import React from 'react';
import Buttons from './Buttons';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <h1>
                Pets that have been successfully adopted this week
            </h1>

            <div className='slide'>
                <div className="wrap">
                    <img src="./img/home1.jpg" alt="A dog who had been adopted as slide" />
                    <img src="./img/home2.jpg" alt="A dog who had been adopted as slide" />
                    
                    <img src="./img/home4.jpg" alt="A cat who had been adopted as slide" />
                    <img src="./img/home5.jpg" alt="A cat who had been adopted as slide" />
                    <img src="./img/home1.jpg" alt="A dog who had been adopted as slide" />
                </div>

                <div className="circle">
                    <div className="active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <h2>
                Your new best friend is waiting!
            </h2>
            <p>
                Thank you for considering pet adoption! Adopting a shelter animal can be a very rewarding experience. Our mission is to place healthy and treatable adoptable pets into permanent homes. We welcome all adopters and aim to find a great match for every customer by providing as much information as we can about each animal, and ultimately allowing each adopter to make the final decision about what is right for their family. Our goal is to be a resource for you throughout the life of your new pet and beyond!
            </p>
            <h2>
                License my pet
            </h2>
            <p>
                King County pet licenses are required for all dogs and cats eight weeks of age or older living in the Regional Animal Services coverage area. A pet license identifies and protects your dog or cat in case they get lost. Also, pet licenses offer lots of other great benefits as well, including our Free Ride Home program.
            </p>
            <h2>
                Key benefits to licensing your pet
            </h2>
            <p>
                1. Found pets are reunited quickly with their owner. The Pet License office number is on the license. If someone finds your pet, they can call the number, get your contact information (even after hours) and reunite you and your pet.
                <br /><br />
                2. Your pet gets a Free Ride Home the first time it is found. Our staff will attempt to deliver your pet home to you immediately, skipping a trip to the animal shelter.
                <br /><br />
                3. Your pet gets a longer care period. When found, your licensed pet will be safely cared for at the Pet Adoption Center for a longer time.
            </p>
        </div>
    );
}

export default Home;