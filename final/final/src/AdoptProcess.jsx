import React, { useState } from 'react';
import './AdoptProcess.css';

function AdoptProcess() {

    return (
        <div>
            <h1 className='adopt-h1'>
                How to adopt ?
            </h1>
            <h2>
                1. Apply Online
            </h2>
            <p>
                If you have a specific pet in mind, we recommend checking our website before visiting to see if they are still available.
            </p>
            <h2>
                2. Make An Appointment
            </h2>
            <p>
                After you have completed and submitted an application, an adoption counselor will reach out to schedule an appointment. Suppose you have previously submitted an adoption application. In that case, you are already in our system, so don't hesitate to contact Mountain Humane directly for an appointment by calling 208-788-4351 or emailing adoptions@mountainhumane.org.
            </p>
            <h3>How much will my adoption cost? </h3>
            <ul><strong>Dogs</strong> 
                <li>Puppies under 6 months: $500</li>
                <li>Dogs 6+ months and over 25 lbs: $300</li>
                <li>Dogs 6+ months and under 25 lbs: $350</li>
            </ul>
            <ul><strong>Cats</strong>
                <li>Kittens under 6 months: $200</li>
                <li>Kittens 6 months to a year: $175</li>
                <li>Cats 1+ years: $125</li>
            </ul>
            <p>
                Adoption fees help provide medical care, training, food, and shelter to our animals. All dogs, cats adopted from Seattle Humane are spayed or neutered, microchipped and are up-to-date on vaccines prior to adoption. When you adopt from Seattle Humane, you receive more than $525 of services.
            </p>
        </div>
    );
}

export default AdoptProcess;