const Stripe = require('stripe');

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? process.env.STRIPE_SECRET_LIVE
    : process.env.STRIPE_SECRET_TEST;

module.exports = Stripe(STRIPE_SECRET_KEY);
