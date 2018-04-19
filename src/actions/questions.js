import { API_BASE_URL } from '../config';

export const FETCH_QUESTION = 'FETCH_QUESTION';
export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';

export const SUBMIT_USER_ANSWER_CORRECT = 'SUBMIT_USER_ANSWER_CORRECT';

export const SUBMIT_USER_ANSWER_WRONG = 'SUBMIT_USER_ANSWER_WRONG';

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

export const submitUserAnswerCorrect = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/questions/correct`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .catch(err => {});
};

export const submitUserAnswerWrong = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/questions/wrong`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .catch(err => {
      err.json();
    });
};
