import * as React from 'react';
// import { Link } from 'react-router-dom';

import './SideNav.css';

export default class SideNav extends React.PureComponent<never, never> {
  public render() {
    return (
      <aside>
        <ul>
          <li className="Sidenav__item">Home</li>
          <li className="Sidenav__item">Orders</li>
          <li className="Sidenav__item">Products</li>
        </ul>
      </aside>
    );
  }
}