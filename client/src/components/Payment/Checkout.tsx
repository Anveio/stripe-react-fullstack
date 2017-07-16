import * as React from 'react';
import axios from 'axios';
import { Card } from '@shopify/polaris';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { STRIPE_PUBLISHABLE, SERVER_ROOT_URL } from '../../constants';

const fromEuroToCent = (amount: number) => amount * 100;

const onToken = (amount: number, description: string) => (token: Token) => {
  axios
    .post(`${SERVER_ROOT_URL}/api/payments`, {
      description,
      source: token.id,
      currency: 'USD',
      amount: fromEuroToCent(amount)
    })
    .then(
      // tslint:disable-next-line:no-console
      success => console.log('Successful payment: ' + success.data),
      error => console.warn('Problem with payment: ' + error)
    )
    .catch();
};

interface Props {
  name: string;
  description: string;
  amount: number;
}

export default ({ name, description, amount }: Props) => {
  const props = {
    name,
    description,
    token: onToken(amount, description),
    amount,
    stripeKey: STRIPE_PUBLISHABLE
  };

  return (
    <Card sectioned>
      <StripeCheckout {...props} />
    </Card>
  );
};
