import * as React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './PageHeader.css';
const logo = require('./logo.svg');

const loggedOutLinks = [
  { path: '/', text: 'Home' },
  { path: 'Signup' },
  { path: 'Login' }
];

const loggedInLinks = [
  { path: '/', text: 'Home' },
  { path: 'Account' },
  { path: 'Users' }
];

export default ({ account }: CurrentUserState) => {
  const loggedOutMarkup = () => {
    return (
      <header className="Page-Header Polaris-Page">
        <div className="Navbar-container">
          <Link to="/" className="Navbar__brand">
            <img src={logo} className="Logo" alt="logo" />
          </Link>
          <Navbar links={loggedOutLinks} />
        </div>
      </header>
    );
  };

  const loggedInMarkup = () => {
    return (
      <header className="Page-Header Polaris-Page">
        <div className="Navbar-container">
          <Link to="/" className="Navbar__brand">
            <img src={logo} className="Logo" alt="logo" />
          </Link>
          <Navbar links={loggedInLinks} />
        </div>
      </header>
    );
  };
  return account ? loggedInMarkup() : loggedOutMarkup();
};
