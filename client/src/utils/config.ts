const FRONTEND_HOST_NAME = `stripe-fullstack-example.shovonhasan.com/`;
const API_HOST_NAME = 'afternoon-falls-86728.herokuapp.com';

export const configureApiRoot = () => {
  const hostname = window && window.location && window.location.hostname;
  switch (hostname) {
    case FRONTEND_HOST_NAME:
      return `https://${API_HOST_NAME}/api`;
    case 'localhost':
      return 'http://localhost:4000/api';
    default:
      throw new Error('Invalid hostname');
  }
};
