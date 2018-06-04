export const configureApiRoot = () => {
  const hostname = window && window.location && window.location.hostname;
  switch (hostname) {
    case WEBSITE_NAME_PRODUCTION:
      return `https://${WEBSITE_NAME_PRODUCTION}/api`;
    case 'localhost':
      return 'http://localhost:4000/api';
    default:
      throw new Error('Invalid hostname');
  }
};
