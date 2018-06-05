import * as React from 'react';
// import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './PageHeader.css';
import { connect } from 'react-redux';
import { RootState, UserState } from 'types';

const loggedOutLinks = [
  { path: '/', text: 'home' },
  { path: 'auth', text: 'login / signup' }
];

const loggedInLinks = [
  { path: '/', text: 'home' },
  { path: 'checkout' },
  { path: 'inventory' }
];

const PageHeader = (account: UserState) => {
  return (
    <header>
      <div className="Navbar-container">
        {/* <LeftLogo /> */}
        <Navbar links={account.token ? loggedInLinks : loggedOutLinks} />
      </div>
    </header>
  );
};

const mapStateToProps = (state: RootState): UserState => ({
  email: state.currentUser.email,
  token: state.currentUser.token
});

export default connect(mapStateToProps)(PageHeader);
