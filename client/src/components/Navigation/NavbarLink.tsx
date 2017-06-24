import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props { path: string; text?: string; }
export default ({ path, text }: Props) => {
  const formatUrl = (): string => {
    return path[0] === '/' ? path : '/' + path;
  };

  const generateLinkText = (): string => {
    return path[0] === '/' ? path.slice(1) : path;
  };

  return (
    <li>
      <Link to={formatUrl()}>
        {text || generateLinkText()}
      </Link>
    </li>
  );
};
