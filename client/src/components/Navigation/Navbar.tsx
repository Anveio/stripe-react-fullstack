import * as React from 'react';
import NavbarLink from './NavbarLink';

interface LinkInfo {
  readonly path: string;
  readonly text?: string;
}

interface Props {
  readonly links: LinkInfo[];
}

const Navbar = ({ links }: Props) => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        {links.map(link => <NavbarLink {...link} key={link.path} />)}
      </ul>
    </nav>
  );
};

export default Navbar;
