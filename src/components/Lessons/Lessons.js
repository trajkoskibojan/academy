import React from 'react';
import Lesson from './Lesson/Lesson';
import Banner from './Banner/Banner';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Div = styled.div`
  display: flex;
  padding: 0 11rem;
  align-items: flex-start;

  > div:first-child {
    width: 70%;
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 890px) {
    display: block;
    > div:first-child {
      width: 100%;
    }
  }
`;

export const Lessons = ({ lessonsData }) => {
  return (
    <Div>
      <div>
        {lessonsData.map((el, i) => (
          <Lesson
            icon={i}
            linked={true}
            key={uuid()}
            show={true}
            num={el.num}
            link={el.link}
            title={el.title}
            date={el.date}
            text={el.text}
          />
        ))}
      </div>
      <Banner />
    </Div>
  );
};
