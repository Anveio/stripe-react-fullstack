import { Token } from 'react-stripe-checkout';
import axios from 'axios';
import { ROOT_API_URL, ApiEndpoint } from 'constants/routes';

export const sendPaymentRequest = (
  amount: number,
  description: string
) => async (token: Token) => {
  // tslint:disable
  const response = await axios.post(`${ROOT_API_URL}${ApiEndpoint.PAYMENT}`, {
    description,
    source: token.id,
    email: token.email,
    currency: 'USD',
    amount
  });
  console.log(response);
  return response;
};
