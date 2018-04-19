import React from 'react';
import { connect } from 'react-redux';
import {
  submitUserAnswerCorrect,
  submitUserAnswerWrong,
  fetchQuestion,
} from '../actions/questions';

class Question extends React.Component {
  onChange(e) {
    e.preventDefault();
    this.setState({ userInput: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    let answer = this.props.currentQuestion.englishWord.toLowerCase();
    let userInput = e.target.userAnswer.value.toLowerCase();
    e.target.userAnswer.value = '';

    if (answer === userInput) {
      this.props.dispatch(submitUserAnswerCorrect());
    }
    else {
      this.props.dispatch(submitUserAnswerWrong());
    }
  }
  verifyAnswer(e) {
    //this is where the validation happens
  }
  render() {
    if(this.props.wrong){
      console.log('you were wrong!');
    }
    if(this.props.correct){
      console.log('you were dog!');
    }
    const spanishWord =
      this.props.currentQuestion !== null
        ? this.props.currentQuestion.spanishWord
        : undefined;
    return (
      <div className="question-dashboard">
        <form onSubmit={e => this.onSubmit(e)}>
          <h2>{spanishWord}</h2>
          <input type="text" name="userAnswer" autoComplete='off'/>
          <button >Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentQuestion: state.question.game,
  wrong: state.question.wrong,
  correct: state.question.correct,

  // currentQuestion: state.question,
});

export default connect(mapStateToProps)(Question);
