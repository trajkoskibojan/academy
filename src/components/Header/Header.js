import React from 'react';
import styled from 'styled-components';
import { H1, Button, P } from '../styled';

const Div = styled.div`
  height: calc(100vh - 17rem);
  margin: 4rem 11rem;
  background: #6666ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 1200px) {
    margin: 4rem 1.5rem;
  }
`;

const DivHeader = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  display: block;
  text-align: center;

  ${H1} {
    margin-bottom: 4rem;
    @media (max-width: 890px) {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 890px) {
    padding: 1rem;
  }
`;

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 40rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 2rem;
  color: white;
  background: #3333ff;
  border: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  &::placeholder {
    color: white;
    font-size: 1.5rem;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 890px) {
    width: 25rem;
    padding: 1.5rem;
  }
  @media (max-width: 425px) {
    width: 18rem;
  }
`;

export const Header = ({title}) => {
  return (
    <Div>
      <DivHeader>
        <H1>{title}</H1>
        <DivInput> 
          <form>
            <Input placeholder="Email Address" type="email" required />
            <Button type="submit" white>
              Пријави се
            </Button>
          </form>
        </DivInput>
        <P>Можеш да се исклучиш од листата на маилови во секое време!</P>
      </DivHeader>
    </Div>
  );
};
