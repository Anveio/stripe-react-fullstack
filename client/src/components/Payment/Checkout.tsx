import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Card } from '@shopify/polaris';
import StripeCheckout, {
  Token,
  StripeCheckoutProps
} from 'react-stripe-checkout';

import { ROOT_API_URL, STRIPE_PUBLISHABLE_TEST_KEY } from '../../constants';

const onToken = (amount: number, description: string) => (token: Token) => {
  axios
    .post<AxiosResponse>(`${ROOT_API_URL}/stripe`, {
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
  const props: StripeCheckoutProps = {
    label: 'Pay With Card',
    name,
    description,
    token: onToken(amount, description),
    amount,
    stripeKey: STRIPE_PUBLISHABLE_TEST_KEY,
    currency: 'USD'
  };

  return (
    <Card sectioned>
      <StripeCheckout {...props} />
    </Card>
  );
};

export default Checkout;
