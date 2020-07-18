import * as actionTypes from '../actions/actionTypes';
import { updateObject } from 'shared/utility';
import { data, dataLessons } from 'data/data.js';

const initialState = {
  data: data,
  dataLessons: dataLessons,
  show: false,
  filtered: [],
  filterAll: true,
};

const onOpenHandler = (state, action) => updateObject(state, { show: true });
const onCloseHandler = (state, action) => updateObject(state, { show: false });

const onDataFilter = (state, action) => {
  const filterArr = state.data.map((obj) => {
    return obj.title === action.title
      ? state.filtered.push({ ...obj, isClicked: true }) && {
          ...obj,
          isClicked: true,
        }
      : obj;
  });
  return updateObject(state, { data: filterArr, filterAll: false });
};

const onDataFilterRemove = (state, action) => {
  const filterArr = state.data.map((obj) => {
    let index = state.filtered.findIndex((obj) => obj.title === action.title);
    return obj.title === action.title
      ? state.filtered.splice(index, 1) && { ...obj, isClicked: false }
      : obj;
  });
  return updateObject(state, { data: filterArr, filterAll: false });
};

const onDataFilterAll = (state, action) => {
  let updateFilter = state.data.map((el) => ({ ...el, isClicked: false }));
  return updateObject(state, {
    data: updateFilter,
    filtered: [],
    filterAll: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return onOpenHandler(state, action);
    case actionTypes.CLOSE_MODAL:
      return onCloseHandler(state, action);
    case actionTypes.DATA_FILTER:
      return onDataFilter(state, action);
    case actionTypes.DATA_FILTER_REMOVE:
      return onDataFilterRemove(state, action);
    case actionTypes.DATA_FILTER_ALL:
      return onDataFilterAll(state, action);
    default:
      return state;
  }
};

export default reducer;
