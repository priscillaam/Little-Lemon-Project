import React from 'react';
import logo from '../images/footer-logo.JPG';

const Footer = () => {
    return (
        <>
            <div className='footerImage'>
                <img src={logo} alt='footer-logo'/>
            </div>
            <div className='footerContainer1'>
                <h3>Content</h3>
                <ul>
                    <li>content</li>
                    <li>content</li>
                    <li>content</li>
                </ul>
            </div>
            <div className='footerContainer2'>
                <h3>Content</h3>
                <ul>
                    <li>content</li>
                    <li>content</li>
                    <li>content</li>
                </ul>
            </div>
            <div className='footerContainer3'>
                <h3>Content</h3>
                <ul>
                    <li>content</li>
                    <li>content</li>
                    <li>content</li>
                </ul>
            </div>
        </>
    )
}

export default Footer;