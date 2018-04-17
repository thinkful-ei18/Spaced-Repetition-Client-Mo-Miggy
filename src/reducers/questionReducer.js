import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_REQUEST,
} from '../actions/questions';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  question: null,
  error: null,
  loading: null,
};

const questionReducer = (state = initialState, action) => {
  if (action.type === FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      question: action.payload,
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      question: null,
      loading: false,
      error: action.err,
    });
  } else {
    return state;
  }
};

const reducers = combineReducers({
  question: questionReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, initialState, middleware);
