const stripe = require('../constants/stripe').default;
const { sendJson } = require('../handlers/util');

exports.processPayment = async (req, res) => {
  const { amount, currency, description, email, source } = req.body;
  try {
    const customer = await stripe.customers.create({
      email
    });

    const bankAccount = await stripe.customers.createSource(customer.id, {
      source
    });

    const charge = await stripe.charges.create({
      amount,
      currency,
      customer: bankAccount.customer,
      description
    });

    return sendJson(res, 200, { message: 'Successfully processed payment.' });
  } catch (e) {
    console.log(e);
    return sendJson(res, 501, { message: 'Failed to process payment.' });
  }
};
