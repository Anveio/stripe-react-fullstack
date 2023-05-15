declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => typeof compose;
  }
}

import { compose } from 'redux';
import { PRODUCTION_API_HOSTNAME, API_VERSION } from '../constants/config';

export const configureApiRoot = () => {
  const hostname = window && window.location && window.location.hostname;
  switch (hostname) {
    case 'localhost':
      return `http://localhost:4000/api/v${API_VERSION}`;
    default:
      return `https://cors-anywhere.herokuapp.com/${PRODUCTION_API_HOSTNAME}/api/v${API_VERSION}`;
  }
};

// tslint:disable:no-string-literal
export const devtools = window['__REDUX_DEVTOOLS_EXTENSION__']
  ? window['__REDUX_DEVTOOLS_EXTENSION__']!()
  : compose;