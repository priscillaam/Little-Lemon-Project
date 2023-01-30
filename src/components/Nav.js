import React from 'react';

const Nav = () => {
    const navStyle = {
        display: 'inline',
        padding: '20px'
    }
    return (
        <>
            <div className='navBar'>
                <ul>
                    <li style={navStyle}>
                        <a href='#'>Home</a>
                    </li>
                    <li style={navStyle}>
                        <a href='#'>About</a>
                    </li>
                    <li style={navStyle}>
                        <a href='#'>Menu</a>
                    </li>
                    <li style={navStyle}>
                        <a href='#'>Reservations</a>
                    </li>
                    <li style={navStyle}>
                        <a href='#'>Order Online</a>
                    </li>
                    <li style={navStyle}>
                        <a href='#'>Login</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Nav;