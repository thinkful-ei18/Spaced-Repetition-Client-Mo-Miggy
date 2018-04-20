import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchQuestion } from '../actions/questions';
import Question from './question';
import Progress from './progress';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-name">Hello {this.props.name}</div>
        <h3 className="dashboard-h3">What is the english word for this?</h3>
        <Question />
        <Progress />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    id: `${currentUser.id}`,
    protectedData: state.protectedData.data,
    currentQuestion: state.question,
  };
};

export default requiresLogin()(
  connect(mapStateToProps, { fetchQuestion })(Dashboard)
);
