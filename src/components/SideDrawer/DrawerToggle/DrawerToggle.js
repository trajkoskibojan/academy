import React from 'react';
import styled from 'styled-components';

const DrawerToggle = styled.div`
  width: 40px;
  height: 58%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  & div {
    width: 90%;
    height: 3px;
    background-color: black;
  }

  @media (min-width: 1190px) {
    display: none;
  }
`;

const drawerToggle = ({clicked}) => (
  <DrawerToggle onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </DrawerToggle>
);

export default drawerToggle;
