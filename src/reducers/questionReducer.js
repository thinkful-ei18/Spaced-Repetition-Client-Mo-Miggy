import { FETCH_QUESTIONS } from '../actions/questions';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  question: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      console.log('fetch question reducer called');
      return {
        ...state,
        question: action.payload,
      };
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  question: questionReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, initialState, middleware);
