import * as actionTypes from './actionTypes';

export const onOpenHandler = () => ({
  type: actionTypes.OPEN_MODAL,
});

export const onCloseHandler = (event) => ({
  type: actionTypes.CLOSE_MODAL,
  event: event,
});

export const onDataFilter = (title) => ({
  type: actionTypes.DATA_FILTER,
  title: title,
});

export const onDataFilterRemove = (title) => ({
  type: actionTypes.DATA_FILTER_REMOVE,
  title: title,
});

export const onDataFilterAll = () => ({
         type: actionTypes.DATA_FILTER_ALL,
       });
