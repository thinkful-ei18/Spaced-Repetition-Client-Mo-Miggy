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
    console.log(this.props.currentQuestion.englishWord);

    let englishWord = this.props.currentQuestion.englishWord;

    if (this.state.userInput) {
      if (this.state.userInput.toLowerCase() === englishWord.toLowerCase()) {
        console.log('got here');
        this.props.dispatch(submitUserAnswerCorrect());
        // this.props.dispatch(fetchQuestion());
      } else {
        this.props.dispatch(submitUserAnswerWrong());
        console.log('error');
      }
    }
  }
  verifyAnswer(e) {
    //this is where the validation happens
  }
  render() {
    // const question = this.state.question;
    // console.log(this.props.state.question.question,'this is the state');
    console.log('-=====-');
    // console.log(this.props.currentQuestion,'question is');
    const spanishWord =
      this.props.currentQuestion !== null
        ? this.props.currentQuestion.spanishWord
        : undefined;

    console.log(spanishWord);
    return (
      <div className="question-dashboard">
        <form onChange={e => this.onChange(e)}>
          <h2>{spanishWord}</h2>
          <h2>{}</h2>
          <input type="text" />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
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
