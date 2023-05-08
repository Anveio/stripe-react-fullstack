const stripe = require('../constants/stripe');
const { sendJson } = require('../handlers/util');

exports.processPayment = async (req, res) => {
  const { amount, currency, description, email, source } = req.body;
  try {
    const customer = await stripe.customers.create({
      email,
      source
    });

    const charge = await stripe.charges.create({
      amount,
      currency,
      customer: customer.id,
      description
    });

    return sendJson(res, 200, {
      message: 'Successfully processed payment.',
      customerId: customer.id
    });
  } catch (e) {
    console.log(e);
    return sendJson(res, 501, { message: 'Failed to process payment.' });
  }
};
