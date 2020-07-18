import React, { Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions';
import styled, { css } from 'styled-components';

const descView = ({ mobView }) => {
  if (mobView) {
    return css`
      border: 1px solid #e9e9e9;
      padding: 1rem;
      font-size: 1.3rem;
      height: calc(100% / 7);
      display: flex;
      justify-content: center;
      align-items: center;

      ${({ active }) =>
        active &&
        css`
          border: 1px solid #e9e9e9 !important;
        `}
    `;
  } else {
    return css`
      padding: 0.5rem 1.3rem;
      border-radius: 50px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      border: 1px solid ${(p) => p.theme.borderNotch};
      &:not(:last-child) {
        margin-right: 2rem;
      }
    `;
  }
};

const DivTagFilter = styled.div`
  background: ${(p) => p.theme.backgroundTag};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(p) => p.theme.secondaryColor};

  ${descView};

  ${({ active }) =>
    active &&
    css`
      background: ${(p) => p.theme.backgroundTagActive};
      border: 1px solid ${(p) => p.theme.backgroundTagActive};
      color: white;
    `}

  &:hover:not(:last-child) {
    background: #ca2b2b;
    border: 1px solid #ca2b2b;
    color: white;
  }
`;

const DivDesc = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;

  @media (max-width: 890px) {
    display: none;
  }
`;

const FilterTags = ({show}) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => {
    return {
      data: state.home.data,
      filterAll: state.home.filterAll,
    };
  });

  const dispatchFilters = (clicked, tag ) => {
    if (!clicked) {
      return dispatch(actions.onDataFilter(tag));
    }

    if (clicked) {
      return dispatch(actions.onDataFilterRemove(tag));
    }
  };

  return (
    <Fragment>
      <DivDesc>
        {filter.data.map((el) => (
          <DivTagFilter
            active={el.isClicked}
            onClick={() => dispatchFilters(el.isClicked, el.title)}
            key={uuid()}
          >
            {el.title}
          </DivTagFilter>
        ))}
        <DivTagFilter
          active={filter.filterAll}
          onClick={() => dispatch(actions.onDataFilterAll())}
        >
          Сите
        </DivTagFilter>
      </DivDesc>
      {show && <div>
        {filter.data.map((el) => (
          <DivTagFilter
            mobView
            active={el.isClicked}
            onClick={() => dispatchFilters(el.isClicked, el.title)}
            key={uuid()}
          >
            {el.title}
          </DivTagFilter>
        ))}
        <DivTagFilter
          mobView
          active={filter.filterAll}
          onClick={() => dispatch(actions.onDataFilterAll())}
        >
          Сите
        </DivTagFilter>
      </div>}
    </Fragment>
  );
};

export default FilterTags;
