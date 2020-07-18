import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/';
import { Button as Btn } from '../../styled/';

const Button = () => {
  const dispatch = useDispatch();
  return (
    <Btn blue onClick={() => dispatch(actions.onOpenHandler())}>
      Пријави се
    </Btn>
  );
};

export default Button;
