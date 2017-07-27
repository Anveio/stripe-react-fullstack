const Stripe = require('stripe');

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? process.env.STRIPE_SECRET_LIVE
    : process.env.STRIPE_SECRET_TEST;

const stripe = Stripe(STRIPE_SECRET_KEY);

module.exports = stripe;