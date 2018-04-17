import React from 'react';
import { connect } from 'react-redux';
class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question.question,
    };
  }
  onChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  render() {
    // const question = this.state.question;
    console.log(`${this.state.question} this is in question comp`);
    return (
      <div className="question-dashboard">
        <form onChange={e => this.onChange(e)}>
          <h2 />
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Question;
