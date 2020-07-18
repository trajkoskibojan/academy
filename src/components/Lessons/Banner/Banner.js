import React from 'react';
import styled from 'styled-components';
import { H2 as H2Title, P as Par, DivLessons, Svg } from 'components/styled';
import arrow from 'assets/icons/arrow.svg';

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  padding: 0 1.5rem 0 0;
  border: 1px solid #e6e6e6;
`;

const P = styled(Par)`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 1.5rem;
  background: #f1f1f1;
  border: none;
  border-radius: 5px;
  color: #808080;
  font-size: 1.5rem;
  width: 100%;

  &::placeholder {
    font-weight: 700;
    font-size: 1.5rem;
    background: white;
    padding: 0.7rem;
  }

  &:focus {
    outline: none;
  }
`;

const H2 = styled(H2Title)`
  margin-bottom: 1.7rem;
  color: #6b6b6b;
`;

const DivBanner = styled.div`
  width: 30%;
  @media (max-width: 890px) {
    width: 100%;
  }
`;

const Banner = () => {
  return (
    <DivBanner>
      <DivLessons>
        <H2>Greatest Wall</H2>
        <P black="#6b6b6b">
          Some will restore your belief in humanity while others make you think
          that we are the worst species on the planet. Never judge people by
          their appearance. Always remain open about what you can learn from
          other people. People rarely fall into easy to fit categories.
        </P>
        <Div>
          <Input placeholder="More" />
          <Svg path={arrow} id="Arrow" />
        </Div>
      </DivLessons>
    </DivBanner>
  );
};

export default Banner;
