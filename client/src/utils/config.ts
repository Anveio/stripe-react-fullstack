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
