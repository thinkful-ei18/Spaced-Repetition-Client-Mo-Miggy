import { API_BASE_URL } from '../config';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
const fetchQuestionRequest = question => ({
  type: FETCH_QUESTION_REQUEST,
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
const fetchQuestionError = err => ({
  type: FETCH_QUESTION_ERROR,
  err,
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  payload: question,
});

export const SUBMIT_USER_ANSWER_CORRECT = 'SUBMIT_USER_ANSWER_CORRECT'
const feedbackRight = () => ({
  type:SUBMIT_USER_ANSWER_CORRECT
})
export const SUBMIT_USER_ANSWER_WRONG = 'SUBMIT_USER_ANSWER_WRONG'
const feedbackWrong = () => ({
  type:SUBMIT_USER_ANSWER_WRONG
})

export const DISMISS_FEEDBACK = 'DISMISS_FEEDBACK'
const dismissFeedback = ()  => ({
  type:DISMISS_FEEDBACK
})


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
  dispatch(feedbackRight())
  fetch(`${API_BASE_URL}/questions/correct`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(() => dispatch(fetchQuestion()))
    .catch(err => {});
};

export const submitUserAnswerWrong = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(feedbackWrong());
  fetch(`${API_BASE_URL}/questions/wrong`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(()=>dispatch(fetchQuestion()))
    .catch(err => dispatch(fetchQuestionError(err)));
};
