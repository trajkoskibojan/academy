import React from 'react';
import styled, { css } from 'styled-components';
import { H3, P, DivLessons, Link } from 'components/styled';
import { Fragment } from 'react';

const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    align-items: center;

    ${H3} {
      font-weight: 800;

      @media(max-width:767px) {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 12rem;
      white-space: nowrap;
      }
    }
  }

  img {
    margin-right: 1rem;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const SpanDate = styled.span`
  padding: 0.7rem 1.2rem;
  background: #ffffcc;
  color: #ff9933;
  font-size: 1.1rem;
  font-weight: 700;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media (max-width: 767px) {
    padding: .5rem;
  }
`;

const SpanNumber = styled.span`
  display: none;
  ${({ show }) =>
    show &&
    css`
      display: block;
      font-size: 1.3rem;
      color: #9999cc;
      font-weight: 800;
      margin-right: 1rem;
    `}
`;


const Lesson = ({ forward, show, num, link, title, date, text, linked, icon }) => {
  return (
    <Fragment>
      {linked ? (
        <DivLessons>
          <A href={link}>
            <DivTitle>
              <div>
                <SpanNumber show={show}>{num}</SpanNumber>
                <H3>{title}</H3>
              </div>
              <div>
                <img
                  src={require(`../../../assets/icons/${icon}.png`)}
                  alt="img"
                />
                <SpanDate>{date}</SpanDate>
              </div>
            </DivTitle>
            <P black="#6b6b6b">{text}</P>
          </A>
        </DivLessons>
      ) : (
        <DivLessons margin>
          <Link to={forward}>
            <DivTitle>
              <div>
                <SpanNumber show={show}>{num}</SpanNumber>
                <H3>{title}</H3>
              </div>
              <SpanDate>{date}</SpanDate>
            </DivTitle>
            <P black="#6b6b6b">{text}</P>
          </Link>
        </DivLessons>
      )}
    </Fragment>
  );
};

export default Lesson;
