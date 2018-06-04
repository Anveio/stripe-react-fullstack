const FRONTEND_DEV_URLS = [
  'https://stripe-fullstack-example.shovonhasan.com',
  'http://localhost:3000'
];

const FRONTEND_PROD_URLS = [
  'https://stripe-fullstack-example.shovonhasan.com',
  'http://localhost:3000'
];

module.exports =
  process.env.NODE_ENV === 'production'
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;
