import * as React from 'react';
import axios from 'axios';
import StripeCheckout, {
  Token,
  StripeCheckoutProps
} from 'react-stripe-checkout';

import { STRIPE_PUBLISHABLE, SERVER_ROOT_URL } from '../constants';

const fromEuroToCent = (amount: number) => amount * 100;

const onToken = (amount: number, description: string) => (token: Token) => {
  axios
    .post(SERVER_ROOT_URL, {
      description,
      source: token.id,
      currency: 'USD',
      amount: fromEuroToCent(amount)
    })
    .then(
      // tslint:disable-next-line:no-console
      success => console.log('Successful payment'),
      error => console.warn('Problem with payment')
    );
};

export default ({ name, description, amount }: StripeCheckoutProps) => {
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromEuroToCent(amount as number)}
      token={onToken(amount as number, description as string)}
      currency={'EUR'}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  );
};
