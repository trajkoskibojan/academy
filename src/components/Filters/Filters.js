import React, { Fragment } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { H2, Hr, Button as Btn, Transition } from '../styled';
import Cards from './Cards/Cards';
import { useContext } from 'react';
import ToggleWrapper from './ToggleWrapper/ToggleWrapper';
import FilterTags from './FilterTags/FilterTags';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Div = styled.div`
  padding: 8rem 15rem;

  @media (max-width: 1200px) {
    padding: 6rem 0;
  }
`;

const DivWrapMob = styled(Transition)`
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const DivMob = styled.div`
  background: #e9e9e9;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
  width: 45rem;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${Hr} {
    border-top: 1px solid #d4d4d4;
    margin: 0;
  }

  @media (max-width: 460px) {
    width: 35rem;
  }
`;

const DivFiltersMob = styled.div`
  display: block;
  text-align: center;
  padding: 2rem 1.5rem;

  ${H2} {
    color: #808080;
    font-size: 2rem;
  }
`;

const DivFiltersDesc = styled.div`
  display: flex;
  margin-left: 32%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  ${H2} {
    font-size: 3rem;
    @media (max-width: 890px) {
      display: none;
    }
  }

  @media (max-width: 890px) {
    margin: 1.5rem;
  }
`;

const Button = styled(Btn)`
  @media (min-width: 891px) {
    display: none;
  }
`;

export const Filters = () => {
  const { id, setTheme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Div>
        <DivFiltersDesc>
          <H2>Филтрирај по категорија</H2>
          <Button onClick={() => setShow(true)} blue>
            Филтрирај
          </Button>
          <ToggleWrapper id={id} setTheme={setTheme} />
        </DivFiltersDesc>
        <FilterTags />
        <Cards />
      </Div>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={500}
        classNames="fade"
      >
        <DivWrapMob onClick={() => setShow(false)}>
          <DivMob>
            <DivFiltersMob>
              <H2>Филтрирај по категорија</H2>
            </DivFiltersMob>
            <Hr />
            <FilterTags show={show} />
          </DivMob>
        </DivWrapMob>
      </CSSTransition>
    </Fragment>
  );
};
