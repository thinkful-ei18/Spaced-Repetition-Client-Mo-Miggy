import React from 'react';
import { connect } from 'react-redux';
class Question extends React.Component {
  onChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  render() {
    console.log(this.props);
    let question = this.props.question;
    return (
      <div className="question-dashboard">
        <form onChange={e => this.onChange(e)}>
          <h2>{question}</h2>
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

export default connect(mapStateToProps)(Question);
