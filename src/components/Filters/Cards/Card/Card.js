import React from 'react';
import styled from 'styled-components';
import { H3, P, Hr, Link } from '../../../styled';


const Div = styled.div`
  max-width: calc((100% - 9rem) / 3);
  background: white;
  border-radius: 10px;
  margin: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 890px) {
    max-width: 100%;
  }
`;

const DivLessons = styled.div`
  display: block;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const DivCard = styled.div`
  display: flex;
  padding: 2rem;
  height: 35rem;
  flex-direction: column;
  justify-content: space-between;

  ${H3} {
    margin-bottom: 0.7rem;
  }

  div:first-of-type {
    display: block;
    width: 10rem;
    height: 12rem;
    text-align: center;
    margin: 1.5rem auto;
    padding: 1rem 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div:last-of-type {
    display: block;
    text-align: left;
    padding: 0 1rem;
  }

  @media (max-width: 890px) {
    height: 30rem;
  }
`;

const Card = (props) => {

  return (
      <Div>
        <Link to={props.forward}>
          <DivCard>
            <div>
              <img
                src={require(`../../../../assets/img/${props.img}.png`)}
                alt="img"
              />
            </div>
            <div>
              <H3>{props.title}</H3>
              <P black="#6b6b6b">{props.text}</P>
            </div>
          </DivCard>
          <Hr />
          <DivLessons>{props.lessons}</DivLessons>
        </Link>
      </Div>
  );
};

export default Card;
