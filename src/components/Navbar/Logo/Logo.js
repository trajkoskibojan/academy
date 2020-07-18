import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.svg';


const DivLogo = styled.div`
  width: 4rem;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Logo = () => {
  return (
    <DivLogo>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </DivLogo>
  );
}

export default Logo
