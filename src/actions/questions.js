import { API_BASE_URL } from '../config';

export const FETCH_QUESTION = 'FETCH_QUESTION';
export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';

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

export const fetchQuestion = dispatch => {
  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(question => {
      dispatch(fetchQuestionSuccess(question));
    })
    .catch(err => {
      dispatch(fetchQuestionError(err));
    });
};
