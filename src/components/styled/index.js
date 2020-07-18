import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Links = ({ children, ...props }) => (
  <NavLink {...props}>{children}</NavLink>
);

export const Link = styled(Links)`
  color: #808080;
  text-decoration: none;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li`
  font-size: 1.5rem;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;
  color: white;
  font-weight: 800;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  color: ${(p) => p.theme.primaryColor};
  font-weight: 600;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  color: #6b6b6b;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(p) => p.black || 'white'};
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #e9e9e9;
  margin: 1rem 0;
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  ${({ blue }) =>
    blue &&
    css`
      padding: 1.3rem 2.5rem;
      border-radius: 5px;
      background: #6666ff;
      color: white;

      &:hover {
        background: #3333ff;
      }
    `}

  ${({ white }) =>
    white &&
    css`
      padding: 2rem 2.5rem;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background: white;
      color: #6b6b6b;

      &:hover {
        background: #f6f6f6;
      }
      @media (max-width: 890px) {
        padding: 1.5rem 2.5rem;
      }
      @media (max-width: 450px) {
        padding: 1.5rem;
      }
    `}

  &:focus {
    outline: none;
  }
`;

export const DivLessons = styled.div`
  padding: 3rem 2.5rem;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  margin: ${(p) => (p.margin ? '1rem 1.5rem' : '2rem 1.5rem')};
`;

const Svgs = styled.svg`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
export const Svg = ({ path, id, ...props }) => (
  <Svgs {...props}>
    <use xlinkHref={`${path}#${id}`} />
  </Svgs>
);

export const Transition = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: scale(0.25);
    transition: all 500ms;
  }
`;
