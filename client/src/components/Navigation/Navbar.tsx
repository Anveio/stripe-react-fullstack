import * as React from 'react';
import NavbarLink from './NavbarLink';

export default class PageHeader extends React.PureComponent<never, never> {
  render() {
    return (
      <nav className="Navbar">
        <ul className="Navbar__list">
          <NavbarLink path="/" text="Home" />
          <NavbarLink path="/Signup" />
        </ul>
      </nav>
    );
  }
}
