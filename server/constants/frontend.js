const FRONTEND_DEV_URLS = [
  'http://localhost:3000',
  'http://localhost:4000',
  'localhost:4000'
];

/**
 * Replace this with the actual URL of your website after it's been deployed.
 * This is an array in case you want to deploy the client to multiple URLS,
 * or have a custom domain for your Netlify app and also want to support the
 * original application URL.
 */
const FRONTEND_PROD_URLS = [
  'https://dalmadaniela.com',
  'https://dalma-daniela.netlify.app'
];

module.exports =
  process.env.NODE_ENV === 'production'
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;
