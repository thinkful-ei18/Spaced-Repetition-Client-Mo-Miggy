import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchQuestion } from '../actions/questions';
import Question from './question';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchQuestion());
  }

  render() {
    console.log('user id is ', this.props.id);
    console.log(this.props.currentQuestion);
    const question = this.props.currentQuestion;
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
        <Question question={question} />
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
