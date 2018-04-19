import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_REQUEST,
  SUBMIT_USER_ANSWER_CORRECT,
  SUBMIT_USER_ANSWER_WRONG,
  DISMISS_FEEDBACK,
  FETCH_FEEDBACK_CORRECT,
  FETCH_FEEDBACK_INCORRECT,
} from '../actions/questions';

const initialState = {
  game: null,
  error: null,
  loading: null,
  correct: false,
  wrong: false,
<<<<<<< HEAD
  sessionScore:0,
  totalQuestions:0
=======
  feedback: '',
>>>>>>> f6e5533b29cb40e8b6a9613581b5a48ac92e5140
};

export default function questionReducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  }
  if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      game: action.payload,
    });
  }
  if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      game: null,
      loading: false,
      error: action.err,
    });
  }
  if (action.type === SUBMIT_USER_ANSWER_CORRECT) {
    return Object.assign({}, state, {
      correct: true,
      wrong: false,
      sessionScore:state.sessionScore+1,
      totalQuestions:state.totalQuestions+1
    });
  }
  if (action.type === SUBMIT_USER_ANSWER_WRONG) {
    return Object.assign({}, state, {
      correct: false,
      wrong: true,
      totalQuestions:state.totalQuestions+1
    });
  }
  if (action.type === DISMISS_FEEDBACK) {
    return Object.assign({}, state, {
      correct: false,
      wrong: false,
      feedback: action.payload,
    });
  }
  if (action.type === FETCH_FEEDBACK_CORRECT) {
    return Object.assign({}, state, {
      feedback: action.payload,
    });
  }
  if (action.type === FETCH_FEEDBACK_INCORRECT) {
    return Object.assign({}, state, {
      feedback: `${action.payload}, the correct answer for ${
        state.game.spanishWord
      } was ${state.game.englishWord}`,
    });
  } else {
    return state;
  }
}
