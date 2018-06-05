import axios from 'axios';
import { ROOT_API_URL } from '../constants';
import { LoginPayload, JsonWebToken, PassportAuthError } from 'types';
import { ApiEndpoint } from 'constants/routes';

interface PasswordLoginResolution {
  readonly token?: string;
  readonly error?: PassportAuthError;
}

export const loginWithPassword = async (
  payload: LoginPayload
): Promise<PasswordLoginResolution> => {
  try {
    const data = await axios
      .post<JsonWebToken>(`${ROOT_API_URL}${ApiEndpoint.LOGIN}`, payload)
      .then(
        success => ({ token: success.data.token, error: undefined }),
        reject => ({
          token: undefined,
          error: reject.response.data as PassportAuthError
        })
      );

    const { token, error } = data;

    if (error) {
      return { error };
    } else if (token) {
      return { token };
    }

    return {};
  } catch (e) {
    // tslint:disable
    console.log(e);
    return {
      token: 'blank'
    };
  }
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
