import React from 'react';
import logo from '../images/Logo.svg'

const Header = () => {
    const imgStyle = {
        width: '90%',
        height: '100%',
        objectFit: 'fill'
    }
    return (
        <>
            <div className='logo'>
                <img src={logo} style = {imgStyle}alt='header-logo'/>
            </div>
        </>
    )
}

export default Header;