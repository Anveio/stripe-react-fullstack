import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  path: string;
  text?: string;
}

export default ({ path, text }: Props) => {
  const formatUrl = (url: string): string => {
    return url[0] === '/' ? url : '/' + url;
  };

  const generateLinkText = (url: string): string => {
    url = url.replace(/-/g, ' ');
    return url[0] === '/' ? url.slice(1) : url;
  };

  return (
    <li>
      <Link to={formatUrl(path)}>
        {text || generateLinkText(path)}
      </Link>
    </li>
  );
};
