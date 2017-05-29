import * as React from 'react';
import NavbarLink from './NavbarLink';

export default class PageHeader extends React.PureComponent<never, never> {
  render() {
    return (
      <nav className="Navbar">
        <ul className="Navbar__list">
          <NavbarLink path="/Home" />
          <NavbarLink path="/About" />
        </ul>
      </nav>
    );
  }
}