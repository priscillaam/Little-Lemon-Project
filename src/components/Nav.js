import React from 'react';
import logo from '../assets/Logo.svg';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';

export const Nav = () => {
    return (
        <div>
        <nav className="site-nav grid">
      <img src={logo} alt='little-lemon-logo'/>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><Link to='/booking'>Reserve</Link></li>
        <li><HashLink to='/#specials'>Specials</HashLink></li>
        <li><HashLink to='/#reviews'>Reviews</HashLink></li>
        <li><HashLink to='/#about'>About</HashLink></li>
        {/* <li><Link href='/'>Order Online</Link></li> */}
      </ul>
    </nav>
    <Outlet />
    <Footer />
    </div>
    )
}
export default Nav;