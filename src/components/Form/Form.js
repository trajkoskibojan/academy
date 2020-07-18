import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actions from 'store/actions/';
import { updateObject } from '../../shared/utility'

import closeIcon from 'assets/icons/close.svg';
import { H1 as heading, P as Par, Svg as SvgClose, Button as Btn, Transition } from '../styled';

const Div = styled(Transition)`
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 10;
`;

const FormSign = styled.form`
  background: #fff;
  padding: 3em 4em 0 4em;
  width: 45rem;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media(max-width: 460px) {
    width: 35rem;
  }
`;

const H1 = styled(heading)`
  margin: 0 0 5rem 0;
  padding: 1rem;
  text-align: center;
  color: #6b6b6b;
  border-bottom: solid 1px #e5e5e5;
`;

const P = styled(Par)`
  position: relative;
  margin: 0 0 3em 0;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin: 0;    
  color: #808080; 

  ${({ typePass }) =>
    typePass &&
    css`
      background: #fff;
      border: 1px solid #dbdbdb;
      font-size: 1.3em;
      padding: 0.8em 0.5em;
      border-radius: 2px;
    `}
`;

const Label = styled.label`
  position: absolute;
  left: 8px;
  top: 12px;
  color: #999;
  font-size: 16px;
  display: inline-block;
  padding: 4px 10px;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0);

  ${({ floatLabel }) =>
    floatLabel &&
    css`
      top: -16px;
      background-color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    `}
`;

const Span = styled.span`
  display: block;
  background: #f9a5a5;
  padding: 2px 5px;
  color: #666;
`;

const Svg = styled(SvgClose)`
  position: fixed;
  transform: scale(0.3);
  width: 10rem;
  height: 10rem;
  top: -1.5rem;
  right: -1.5rem;
`;

const Button = styled(Btn)`
  width: 100%;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

export const Form = () => {
  const [isfFormValid, setIsFormValid] = useState(false)
  const [valueInput, setValueInput] = useState({
    email: {required: '', value: '', valid: true },
    password: {
      valid: false,
      touched: false,
      required: { min_length: 8 },
      value: '',
    },
    confirm_password: {
      valid: false,
      touched: false,
      required: {
        pass_value: 1 },
      value: '',
    },
  });

  const show = useSelector((state) => state.home.show);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let isFormValid = true;
    for (const key in valueInput) {
      isFormValid = valueInput[key].valid && isFormValid;
    }
    setIsFormValid(isFormValid);
  }, [valueInput]);
  
  
  const checkValidity = (values, rules) => {
    let isValid = true;

    if (rules.min_length) {
      isValid = values.length > rules.min_length && isValid;
    }
    
    if (rules.pass_value) {
      isValid = values === valueInput.password.value && isValid; 
    }
    return isValid;
  }

  const onChangeHandler = (e) => {
    const updateState = updateObject(valueInput, {
      [e.target.name]: updateObject(valueInput[e.target.name], {
        valid: checkValidity(
          e.target.value,
          valueInput[e.target.name].required
        ),
        touched: true,
        value: e.target.value,
      }),
    });
    setValueInput(updateState);
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={500}
      classNames="fade"
    >
      <Div onClick={(e) => dispatch(actions.onCloseHandler(e))}>
        <FormSign onClick={(e) => e.stopPropagation()}>
          <Svg
            path={closeIcon}
            id="3.-To-close"
            onClick={(e) => dispatch(actions.onCloseHandler(e))}
          />
          <H1>Sign Up</H1>
          <P black="#6b6b6b">
            <Label htmlFor="Email" floatLabel>
              Email
            </Label>
            <Input
              typePass
              id="Email"
              name="email"
              type="email"
              required
              onChange={onChangeHandler}
            />
          </P>
          <P black="#6b6b6b">
            <Label htmlFor="password" floatLabel>
              Password
            </Label>
            <Input
              typePass
              id="password"
              name="password"
              type="password"
              required
              onChange={onChangeHandler}
            />
            {valueInput.password.touched && !valueInput.password.valid && (
              <Span>Enter a password longer than 8 characters</Span>
            )}
          </P>
          <P black="#6b6b6b">
            <Label htmlFor="confirm_password" floatLabel>
              Confirm Password
            </Label>
            <Input
              typePass
              id="confirm_password"
              name="confirm_password"
              type="password"
              required
              onChange={onChangeHandler}
            />
            {valueInput.confirm_password.touched &&
              !valueInput.confirm_password.valid && (
                <Span>Your passwords do not match</Span>
              )}
          </P>
          <Button
            onSubmit={(e) => e.preventDefault()}
            blue
            type="submit"
            disabled={!isfFormValid}
          >
            Create Account
          </Button>
        </FormSign>
      </Div>
    </CSSTransition>
  );
};
