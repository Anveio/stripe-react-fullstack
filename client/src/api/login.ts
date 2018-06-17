import axios from 'axios';
import { LoginPayload } from 'types';
import { ApiEndpoint, ROOT_API_URL } from 'constants/routes';
import { LoginSuccessResponse, PassportAuthError } from 'server-response-types';

export const loginWithPassword = async (
  payload: LoginPayload
): Promise<LoginSuccessResponse> => {
  const response = await axios.post<LoginSuccessResponse>(
    `${ROOT_API_URL}${ApiEndpoint.LOGIN_WITH_PASSWORD}`,
    payload
  );

  return response.data;
};

interface JwtLoginResolution {
  readonly email: string;
  readonly errors?: PassportAuthError[];
}

export const loginWithJwt = async (
  jwt: string
): Promise<JwtLoginResolution> => {
  const response = await axios.post<{ email: string }>(
    `${ROOT_API_URL}${ApiEndpoint.LOGIN_WITH_JWT}`,
    {
      token: jwt
    }
  );

  return {
    email: response.data.email
  };
};
