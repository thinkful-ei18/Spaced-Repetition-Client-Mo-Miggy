import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/questions';

class Question extends React.Component {
  componentDidMount() {
    // this.props.fetchQuestions();
  }
  onChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  render() {
    // let question = this.props.question;
    return (
      <div className="question-dashboard">
        <form onChange={e => this.onChange(e)}>
          <h2>question</h2>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question,
});

export default connect(mapStateToProps, { fetchQuestions })(Question);
