import types from '../constants/ActionTypes';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = Immutable({
  title: 'Hello World',

  data: {},
  isFetching: false,
  error: false,
});


const changeTitle = (state, action) => {
  return state.merge({
    title: action.payload,
  });
};


const getPending = (state, action) => {
  return state.merge({
    isFetching: true,
    error: false,
  });
};

const getSuccess = (state, action) => {
  return state.merge({
    isFetching: false,
    data: action.payload,
  });
};

const getFailure = (state, action) => {
  return state.merge({
    isFetching: false,
    error: action.error,
  });
};


const ACTION_HANDLERS = {
  [types.CHANGE_TITLE]: changeTitle,

  [types.GET_SETTINGS_PENDING]: getPending,
  [types.GET_SETTINGS_SUCCESS]: getSuccess,
  [types.GET_SETTINGS_FAILURE]: getFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
