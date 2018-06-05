const FRONTEND_DEV_URLS = ['http://localhost:3000'];

/**
 * Replace this with the actual URL of your website after it's been deployed.
 */
const FRONTEND_PROD_URLS = ['https://stripe-fullstack-example.shovonhasan.com'];

module.exports =
  process.env.NODE_ENV === 'production'
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;
