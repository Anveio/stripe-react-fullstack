import axios from 'axios';
import { ROOT_API_URL } from '../constants';
import { LoginPayload, JsonWebToken, PassportAuthError } from 'types';
import { ApiEndpoint } from 'constants/routes';

interface PasswordLoginResolution {
  readonly token: string;
}

export const loginWithPassword = async (
  payload: LoginPayload
): Promise<PasswordLoginResolution> => {
  const response = await axios.post<JsonWebToken>(
    `${ROOT_API_URL}${ApiEndpoint.LOGIN}`,
    payload
  );

  return { token: response.data.token };
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
