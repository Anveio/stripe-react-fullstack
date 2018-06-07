import { SignupPayload } from 'types';
import axios from 'axios';
import { ROOT_API_URL, ApiEndpoint } from 'constants/routes';
import { LoginSuccessResponse } from 'server-response-types';

export const sendUserRegistrationRequest = async (payload: SignupPayload) => {
  const response = await axios.post<LoginSuccessResponse>(
    `${ROOT_API_URL}${ApiEndpoint.SIGNUP}`,
    payload
  );
  return response.data;
};
