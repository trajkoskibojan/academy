import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css, ThemeContext } from 'styled-components';
import Card from './Card/Card';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import Lesson from 'components/Lessons/Lesson/Lesson';

const Divwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: ${(p) => (p.width ? '70%' : '100%')};
  transition: all 0.5s ease-out;
  opacity: 0;
  transform: scale(0.25);

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transform: scale(1);
    `};

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const Cards = (props) => {
  const { id } = useContext(ThemeContext);
  const data = useSelector((state) => {
    return {
      data: state.home.data,
      filtered: state.home.filtered,
    };
  });

  return (
    <Fragment>
      <Divwrap isActive={id === 'light'}>
        {id === 'light' && data.filtered.length === 0
          ? data.data.map((card) => (
              <Card
                forward={/title/ + card.title.split(' ').join('-')}
                key={uuid()}
                img={card.image}
                title={card.title}
                text={card.text}
                lessons={card.lessons}
              />
            ))
          : id === 'light' &&
            data.filtered.length > 0 &&
            data.filtered.map((card) => (
              <Card
                forward={/title/ + card.title.split(' ').join('-')}
                key={uuid()}
                img={card.image}
                title={card.title}
                text={card.text}
                lessons={card.lessons}
              />
            ))}
      </Divwrap>
      <Divwrap isActive={id === 'dark'} width="true">
        {id === 'dark' && data.filtered.length === 0
          ? data.data.map((card) => (
              <Lesson
                forward={/title/ + card.title.split(' ').join('-')}
                show={false}
                key={uuid()}
                title={card.title}
                text={card.text}
                date={card.lessons}
              />
            ))
          : id === 'dark' &&
            data.filtered.length > 0 &&
            data.filtered.map((card) => (
              <Lesson
                forward={/title/ + card.title.split(' ').join('-')}
                show={false}
                key={uuid()}
                title={card.title}
                text={card.text}
                date={card.lessons}
              />
            ))}
      </Divwrap>
    </Fragment>
  );
};

export default withRouter(Cards);
