import React from 'react';
import { connect } from 'react-redux';

class Progress extends React.Component {
  render() {
    if (this.props.total === 0) {
      return null;
    }
    return (
      <div className="progressbar">
        <span>
          You've gotten {this.props.correct} out of {this.props.total}{' '}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  correct: state.question.sessionScore,
  total: state.question.totalSessionQuestions,
});

export default connect(mapStateToProps)(Progress);
