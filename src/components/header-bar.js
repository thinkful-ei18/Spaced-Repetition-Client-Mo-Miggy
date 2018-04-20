import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  redirect() {
    return <this.redirect to="/" />;
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
    }
    if (!this.props.loggedIn) {
      logOutButton = (
        <Link className="log-in" to="/">
          Log in
        </Link>
      );
    }
    return (
      <div className=" header-primary-main header-bar">
        <span className="header-app-name">Spanglish</span>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);
