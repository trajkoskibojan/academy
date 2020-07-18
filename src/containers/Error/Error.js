import React from 'react';
import styled from 'styled-components';
import { Link as NavLink } from 'components/styled';

const Div = styled.div`
  height: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 7rem;
    color: white;
  }

  & p {
    font-size: 2rem;
    color: white;
  }
`;

const Link = styled(NavLink)`
  color: #d84545;
  font-weight: 800;
`;

export const Error = (props) => {
  return (
    <Div>
      <h1>Error 404</h1>
      <p>
        You reached a dead end. Go back to the{' '}
        <Link to="/">
          Homepage
        </Link>{' '}
      </p>
    </Div>
  );
};
