import * as React from 'react';
import axios from 'axios';
import { Card } from '@shopify/polaris';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { STRIPE_PUBLISHABLE, ROOT_API_URL } from '../../constants';

const onToken = (amount: number, description: string) => (token: Token) => {
  console.log(token);
  axios
    .post(`${ROOT_API_URL}/stripe`, {
      description,
      source: token.id,
      email: token.email,
      currency: 'USD',
      amount
    })
    .then(
      // tslint:disable-next-line:no-console
      success => console.log('Successful payment: ' + success.data),
      reject => console.warn('Problem with payment: ' + reject)
    )
    .catch();
};

interface Props {
  name: string;
  description: string;
  amount: number;
}

const Checkout = ({ name, description, amount }: Props) => {
  const props = {
    label: 'Pay With Card',
    name,
    description,
    token: onToken(amount, description),
    amount,
    stripeKey: STRIPE_PUBLISHABLE,
    currency: 'USD'
  };

  return (
    <Card sectioned>
      <StripeCheckout {...props} />
    </Card>
  );
};

export default Checkout;
