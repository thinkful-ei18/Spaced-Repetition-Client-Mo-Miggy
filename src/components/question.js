import React from 'react';
import { connect } from 'react-redux';

class Question extends React.Component {
  onChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  verifyAnswer(e){
    //this is where the validation happens
  }
  render() {
    // const question = this.state.question;
    // console.log(this.props.state.question.question,'this is the state');
    console.log('-=====-');
    // console.log(this.props.currentQuestion,'question is');
    const spanishWord = this.props.currentQuestion !== null ? this.props.currentQuestion.spanishWord : undefined
    return (
      <div className="question-dashboard">
        <form onChange={e => this.onChange(e)}>
          <h2>{spanishWord}</h2>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  currentQuestion:state.question.question,


      // currentQuestion: state.question,
})

export default connect(mapStateToProps)(Question);
