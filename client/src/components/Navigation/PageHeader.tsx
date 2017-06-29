import * as React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './PageHeader.css';
const logo = require('./logo.svg');

export default ({ account }: CurrentUserState) => {
  const loggedOutMarkup = () => {
    return (
      <header className="Page-Header Polaris-Page">
        <div className="Navbar-container">
          <Link to="/" className="Navbar__brand">
            <img src={logo} className="Logo" alt="logo" />
          </Link>
          <Navbar />
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
          <Navbar />
        </div>
      </header>
    );
  };
  return account ? loggedInMarkup() : loggedOutMarkup();
};