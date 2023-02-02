import React from 'react';
import logo from '../images/footer-logo.JPG';

const Footer = () => {
    return (
        <>
            <div className='footerImage'>
                <img src={logo} alt='footer-logo'/>
            </div>
            <div className='footerContainer1'>
                <h3>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='footerContainer2'>
                <h3>Contact</h3>
                <ul>
                    <li>2395 Maldove Way,
                        Chicago Illinois
                    </li>
                    <li>(629)-243-6827</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </div>
            <div className='footerContainer3'>
                <h3>Connect</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Join us!</li>
                </ul>
            </div>
        </>
    )
}

export default Footer;