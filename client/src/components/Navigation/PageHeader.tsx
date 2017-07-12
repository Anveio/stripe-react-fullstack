import * as React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './PageHeader.css';
const logo = require('./logo.svg');

const LeftLogo = () => {
  return (
    <Link to="/" className="Navbar__brand">
      <img src={logo} className="Logo" alt="logo" />
    </Link>
  );
};

const loggedOutLinks = [
  { path: '/', text: 'Home' },
  { path: 'signup' },
  { path: 'login' }
];

const loggedInLinks = [
  { path: '/', text: 'Home' },
  { path: 'account' },
  { path: 'users' }
];

export default (account: UserState) => {
  const loggedOutMarkup = () => {
    return (
      <header>
        <div className="Navbar-container">
          <LeftLogo />
          <Navbar links={loggedOutLinks} />
        </div>
      </header>
    );
  };

  const loggedInMarkup = () => {
    return (
      <header>
        <div className="Navbar-container">
          <LeftLogo />
          <Navbar links={loggedInLinks} />
        </div>
      </header>
    );
  };
  return account ? loggedInMarkup() : loggedOutMarkup();
};
