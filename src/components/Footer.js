import React from "react";
import footerLogo from '../assets/footer-logo.JPG';

export const Footer = () => {
    return(
        <footer className="grid">
        <img src={footerLogo} alt='footer-logo'/>
        <div className='contact-info'>
          <h4>Contact</h4>
            <ul>
              <li>2395 Maldove Way,<br/>Chicago Illinois</li>
              <li>(629) 243-6827</li>
              <li>info@littlelemon.com</li>
            </ul>
        </div>
        <div className='social-media'>
          <h4>Connect</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Join us!</li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer; 