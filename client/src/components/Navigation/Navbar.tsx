import * as React from 'react';
import NavbarLink from './NavbarLink';

interface LinkInfo {
  path: string;
  text?: string;
}

interface Props {
  links: LinkInfo[];
}

export default ({ links }: Props) => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        {links.map(link => <NavbarLink {...link} key={link.path} />)}
      </ul>
    </nav>
  );
};
