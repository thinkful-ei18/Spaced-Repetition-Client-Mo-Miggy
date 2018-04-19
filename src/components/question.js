import React from 'react';
import { connect } from 'react-redux';
import {
  submitUserAnswerCorrect,
  submitUserAnswerWrong,
} from '../actions/questions';

class Question extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let answer = this.props.currentQuestion.englishWord.toLowerCase();
    let userInput = e.target.userAnswer.value.toLowerCase();
    e.target.userAnswer.value = '';

    if (answer === userInput) {
      this.props.dispatch(submitUserAnswerCorrect());
    } else {
      this.props.dispatch(submitUserAnswerWrong());
    }
  }
  render() {
    const spanishWord =
      this.props.currentQuestion !== null
        ? this.props.currentQuestion.spanishWord
        : undefined;
    const feedback =
      this.props.feedback !== null ? this.props.feedback : undefined;

    return (
      <div className="question-dashboard">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2>{spanishWord}</h2>
          <h3 className="feedback">{feedback}</h3>
          <input type="text" name="userAnswer" autoComplete="off" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentQuestion: state.question.game,
  wrong: state.question.wrong,
  correct: state.question.correct,
  feedback: state.question.feedback,

  // currentQuestion: state.question,
});

export default connect(mapStateToProps)(Question);
