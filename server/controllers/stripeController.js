const stripe = require('../constants/stripe');
const { sendJson } = require('../handlers/util');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

exports.processPayment = async (req, res) => {
  console.log(`Processing payment at: ${new Date().toISOString()}`);
  const { amount, currency, description, email } = req.body;

  const customer = await stripe.customers.create({ email });
  const source = await stripe.customers.createSource(customer.id, {
    source: {
      object: 'card',
      exp_month: 10,
      exp_year: 2018,
      number: '4242 4242 4242 4242',
      cvc: 100
    }
  });

  const charge = await stripe.charges.create({
    amount,
    currency,
    customer: source.customer
  });

  // const customer = await stripe.customers.create({email})

  // const charge = await stripe.charges.create(req.body, postStripeCharge(res));
  // if (charge) return sendJson(res, 200, { message: 'Payment successful!' });
};
