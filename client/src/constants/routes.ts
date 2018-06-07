import { configureApiRoot } from 'utils/config';

export enum Path {
  HOME = '/',
  AUTH = '/auth',
  CHECKOUT = '/checkout'
}

export enum ApiEndpoint {
  LOGIN = '/login',
  LOGIN_WITH_JWT = '/auth/jwt',
  SIGNUP = '/signup'
}

export const ROOT_API_URL = configureApiRoot();
