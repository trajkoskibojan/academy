import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button/Button'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from '../SideDrawer/SideDrawer';

const Div = styled.div`
  padding-right: 7.5rem;
  height: 9rem;
  background: white;

  @media(max-width: 1250px) {
    padding-right: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 3.5rem;
`;

const DivLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 48%;

  @media(max-width: 1190px) {
    display: none;
  }
`;

export const Navbar = (props) => {
 
  const [sideDrawerIsVIsible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVIsible);
  };


  return (
    <Div>
      <Nav>
        <DrawerToggle clicked={sideDrawerToggleHandler} />
        <SideDrawer
          open={sideDrawerIsVIsible}
          closed={sideDrawerClosedHandler}
        />
        <Logo />
        <DivLinks>
         <NavLinks />
         <Button />
        </DivLinks>
      </Nav>
    </Div>
  );
};