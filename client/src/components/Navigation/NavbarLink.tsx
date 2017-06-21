import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props { path: string; text?: string; }
export default class NavbarLink extends React.PureComponent<Props, never> {
  formatUrl = (path: string): string => {
    return path[0] === '/'
      ? path
      : '/' + path;
  }

  formatName = (path: string): string => {
    return path[0] === '/'
      ? path.slice(1)
      : path;
  }

  render() {
    return (
      <li>
        <Link to={this.formatUrl(this.props.path)}>
          {this.props.text || this.formatName(this.props.path)}
        </Link>
      </li>
    );
  }
}