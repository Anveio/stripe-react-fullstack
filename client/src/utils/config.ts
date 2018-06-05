import {
  PRODUCTION_FRONTEND_HOSTNAME,
  PRODUCTION_API_HOSTNAME
} from '../constants';

export const configureApiRoot = () => {
  const hostname = window && window.location && window.location.hostname;
  switch (hostname) {
    case PRODUCTION_FRONTEND_HOSTNAME:
      return `https://${PRODUCTION_API_HOSTNAME}/api`;
    case 'localhost':
      return 'http://localhost:4000/api';
    default:
      throw new Error('Invalid hostname');
  }
};
