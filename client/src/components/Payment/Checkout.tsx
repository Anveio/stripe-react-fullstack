import * as React from 'react';
import { Card, Layout } from '@shopify/polaris';
import StripeCheckout, { StripeCheckoutProps } from 'react-stripe-checkout';

import { STRIPE_PUBLISHABLE_TEST_KEY } from '../../constants/config';
import { sendPaymentRequest } from 'api/stripe';

interface Props {
  name: string;
  description: string;
  amount: number;
}

const Checkout = ({ name, description, amount }: Props) => {
  const stripeCheckoutProps: StripeCheckoutProps = {
    label: 'Pay With Card',
    name,
    description,
    token: sendPaymentRequest(amount, description),
    amount,
    stripeKey: STRIPE_PUBLISHABLE_TEST_KEY,
    currency: 'USD',
    
  };

  return (
    <Layout.Section>
      <Card sectioned>
        <StripeCheckout {...stripeCheckoutProps} />
      </Card>
    </Layout.Section>
  );
};

export default Checkout;
