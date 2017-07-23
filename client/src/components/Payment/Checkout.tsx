import * as React from 'react';
import axios from 'axios';
import { Card, Button } from '@shopify/polaris';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { STRIPE_PUBLISHABLE, ROOT_API_URL } from '../../constants';

const onToken = (amount: number, description: string) => (token: Token) => {
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
    stripeKey: STRIPE_PUBLISHABLE,
    currency: 'USD'
  };

  return (
    <Card sectioned>
      <StripeCheckout {...props}>
        <Button icon="circleChevronRight" external>
          Pay With Card
        </Button>
      </StripeCheckout>
    </Card>
  );
};
