import { API_BASE_URL } from '../config';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const fetchQuestions = dispatch => {
  console.log('fetching questions');
  return fetch(`${API_BASE_URL}`)
    .then(res => res.json())
    .then(question =>
      dispatch({
        type: FETCH_QUESTIONS,
        payload: question,
      })
    );
};
