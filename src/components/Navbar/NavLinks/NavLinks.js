import React from 'react';
import styled from 'styled-components';
import { Ul, Li } from 'components/styled/';

const A = styled.a`
  color: #808080;
  text-decoration: none;

  &:hover {
    color: #6666ff;
  }
`;


const NavLinks = () => {
  return (
    <Ul>
      <Li>
        <A href="https://projecttwo.bojantrajkoski.com/">Академии</A>
      </Li>
      <Li>
        <A href="https://projectone.bojantrajkoski.com/">Вебинари</A>
      </Li>
      <Li>
        <A href="https://natours.bojantrajkoski.com/">Тест за Кариера</A>
      </Li>
      <Li>
        <A href="https://bojantrajkoski.com/">Блог</A>
      </Li>
    </Ul>
  );
}

export default NavLinks
