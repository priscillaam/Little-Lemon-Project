import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
    const navStyle = {
        display: 'inline',
        padding: '10px'
    }
    return (
        <>
            <div className='navBar'>
                <ul>
                    <li style={navStyle}>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li style={navStyle}>
                        <Link to="/about" className="nav-item">About Little Lemon</Link>
                    </li>
                    <li style={navStyle}>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </li>
                    <li style={navStyle}>
                        <Link to="/menu" className="nav-item">Menu</Link>
                    </li>
                    <li style={navStyle}>
                        <Link to="/reservations" className="nav-item">Booking</Link>
                    </li>
                    <li style={navStyle}>
                        <Link to="/order" className="nav-item">Order Online</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Nav;