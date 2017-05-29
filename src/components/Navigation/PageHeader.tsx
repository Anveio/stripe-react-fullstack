import * as React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './PageHeader.css';
const logo = require('./logo.svg');

export default class PageHeader extends React.PureComponent<never, never> {
  readonly loggedOutMarkup = (): JSX.Element => {
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
  }

  render() {
    return (
      this.loggedOutMarkup()
    );
  }
}