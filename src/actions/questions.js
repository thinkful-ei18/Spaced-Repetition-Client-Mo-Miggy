import { API_BASE_URL } from '../config';

export const FETCH_QUESTION = 'FETCH_QUESTION';
export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';

export const SUBMIT_USER_ANSWER_CORRECT = 'SUBMIT_USER_ANSWER_CORRECT';
export const SUBMIT_USER_ANSWER_CORRECT_ERROR =
  'SUBMIT_USER_ANSWER_CORRECT_ERROR';
export const SUBMIT_USER_ANSWER_CORRECT_REQUEST =
  'SUBMIT_USER_ANSWER_CORRECT_REQUEST';

export const SUBMIT_USER_ANSWER_WRONG = 'SUBMIT_USER_ANSWER_WRONG';
export const SUBMIT_USER_ANSWER_WRONG_ERROR = 'SUBMIT_USER_ANSWER_WRONG_ERROR';
export const SUBMIT_USER_ANSWER_WRONG_REQUEST =
  'SUBMIT_USER_ANSWER_WRONG_REQUEST';

const fetchQuestionRequest = question => ({
  type: FETCH_QUESTION_REQUEST,
});
const fetchQuestionError = err => ({
  type: FETCH_QUESTION_ERROR,
  err,
});
const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  payload: question,
});

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .then(question => {
      dispatch(fetchQuestionSuccess(question));
    })
    .catch(err => {
      dispatch(fetchQuestionError(err));
    });
};

export const submitUserAnswerCorrectRequest = correct => ({
  type: SUBMIT_USER_ANSWER_CORRECT_REQUEST,
});

export const submitUserAnswerCorrectError = err => ({
  type: SUBMIT_USER_ANSWER_CORRECT_ERROR,
  err,
});

export const submitUserAnswerWrongRequest = wrong => ({
  type: SUBMIT_USER_ANSWER_WRONG_REQUEST,
});

export const submitUserAnswerWrongError = err => ({
  type: SUBMIT_USER_ANSWER_WRONG_ERROR,
  err,
});

export const submitUserAnswerCorrect = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(submitUserAnswerCorrectRequest());
  return fetch(`${API_BASE_URL}/correct`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .then(() => {
      dispatch(fetchQuestion());
    })
    .catch(err => {
      dispatch(submitUserAnswerCorrectError(err));
    });
};

export const submitUserAnswerWrong = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(submitUserAnswerWrongRequest());
  return fetch(`${API_BASE_URL}/correct`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .then(() => {
      dispatch(fetchQuestion());
    })
    .catch(err => {
      dispatch(submitUserAnswerWrongError(err));
    });
};
