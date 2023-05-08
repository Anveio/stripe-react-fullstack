const FRONTEND_DEV_URLS = ['http://localhost:3000'];

/**
 * Replace this with the actual URL of your website after it's been deployed.
 * This is an array in case you want to deploy the client to multiple URLS,
 * or have a custom domain for your Netlify app and also want to support the
 * original application URL.
 */
const FRONTEND_PROD_URLS = [
  'https://stripe-fullstack-example.shovonhasan.com',
  'https://distracted-kowalevski-960eec.netlify.com'
];

module.exports =
  process.env.NODE_ENV === 'production'
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;
