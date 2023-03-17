import React, {useState} from 'react';
import logo from '../../assets/Logo.svg';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';

export const Nav = () => {
  const [isActive, setActive] = useState('false');
  const ToggleClass = () => {
    setActive(!isActive);
  };
    return (
      <div>
        <header>
          
          <NavContainer>
            
            <LeftSection>
              <Image src={logo} alt='little-lemon-logo'/>
            </LeftSection>
            <RightSection >
              <LinksWrapper id='nav' className={isActive ? '#nav' : 'active'}>
                <LinkItem><Link to='/'>Home</Link></LinkItem>
                <LinkItem><Link to='/booking'>Reserve</Link></LinkItem>
                <LinkItem><HashLink to='/#specials'>Specials</HashLink></LinkItem>
                <LinkItem><HashLink to='/#reviews'>Reviews</HashLink></LinkItem>
                <LinkItem><HashLink to='/#about'>About</HashLink></LinkItem>
              </LinksWrapper>
            </RightSection>
            <div id='mobile'>
                  <MenuIcon onClick={() => ToggleClass()}/>
            </div>
              
          </NavContainer>
        </header>
        <Outlet />
        <Footer />
      </div>
    )
}
export default Nav;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  height: 60px;
  position: relative;
  
`
const LeftSection = styled.div`
  display: flex;
  margin: 0 auto;
`
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`
const RightSection = styled.div`
  display: flex;
  margin: 0 auto;
`
const LinksWrapper = styled.ul`
  margin: 0;
  display: flex;
  padding: 0;
`
const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  font-family: 'Karla';
  font-weight: 600;
`
