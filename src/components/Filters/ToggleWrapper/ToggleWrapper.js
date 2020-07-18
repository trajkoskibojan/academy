import React from 'react';
import styled from 'styled-components';

const ToggleWrapperDiv = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid ${(p) => p.theme.backgroundNotch};
  display: flex;
  background: ${(p) => p.theme.backgroundNotch};
  cursor: pointer;
  margin: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  @media (max-width: 890px) {
    margin: 0;
  }
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid white;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${({ isActive }) => (isActive ? '26px' : '1px')});
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const ToggleWrapper = ({ setTheme, id }) => {
  return (
    <ToggleWrapperDiv onClick={setTheme}>
      <Notch isActive={id === 'dark'} />
    </ToggleWrapperDiv>
  );
};

export default ToggleWrapper
