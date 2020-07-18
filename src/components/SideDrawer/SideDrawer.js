import React, { Fragment } from 'react';
import styled from 'styled-components';

import NavLinks from '../Navbar/NavLinks/NavLinks'
import Logo from '../Navbar/Logo/Logo';
import Button from '../Navbar/Button/Button'

const SideDrawerDiv = styled.div`
  position: fixed;
  width: 28rem;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(p) => (p.open ? 'translateX(0)' : 'translateX(-100%)')};

  > div:first-child {
    margin-bottom: 10rem;
  }

  & ul {
    flex-direction: column;
    margin-bottom: 3rem;

    & li {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1190px) {
    display: none;
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const sideDrawer = ({open, closed}) => {
  return (
    <Fragment>
      {open ? <Backdrop onClick={closed} /> : null}
      <SideDrawerDiv open={open} onClick={closed}>
        <Logo />
        <NavLinks />
        <Button />
      </SideDrawerDiv>
    </Fragment>
  );
};
 
export default sideDrawer;
