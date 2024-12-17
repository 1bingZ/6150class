import React from 'react';

function Footer({ }) {
    return (
        <footer>
            
            <div className='footer-information'>
                <div className='location'>
                    Contact <br /><br />5200 Roosevelt Way NE <br />Suite B <br />Seattle, WA 98105 <br />(206) 782-1700
                </div>
                <div className='time'>
                    Hours <br /><br />Monday: Closed <br />Tuesday: Noon–6 p.m. <br />Wednesday: Noon–6 p.m. <br />Thursday: Noon–6 p.m. <br />Friday: Noon–6 p.m. <br />Saturday: 11 a.m.–5 p.m. <br />Sunday: 11 a.m.–5 p.m.
                </div>
            </div>

            <div className='footer-contact'>
                If you have any problems, please <a href="https://blue.kingcounty.gov/about/contact/">contact us</a>
            </div>

        </footer>
    );
}

export default Footer;