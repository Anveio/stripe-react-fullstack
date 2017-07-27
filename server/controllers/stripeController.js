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
  const { amount, currency, description, email, source } = req.body;

  const customer = await stripe.customers.create({
    email
  });

  const bankAccount = await stripe.customers.createSource(customer.id, { source });

  const charge = await stripe.charges.create({
    amount,
    currency,
    customer: bankAccount.customer,
    description
  });

  return sendJson(res, 200, { message: 'Successfully processed payment' });
};
