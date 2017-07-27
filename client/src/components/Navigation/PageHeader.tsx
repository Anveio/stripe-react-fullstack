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
  { path: '/', text: 'home' },
  { path: 'signup' },
  { path: 'login' }
];

const loggedInLinks = [
  { path: '/', text: 'home' },
  { path: 'account' },
  { path: 'users' },
  { path: 'checkout' }
];

const PageHeader = (account: UserState) => {
  return (
    <header>
      <div className="Navbar-container">
        <LeftLogo />
        <Navbar links={account.token ? loggedInLinks : loggedOutLinks} />
      </div>
    </header>
  );
};

export default PageHeader;