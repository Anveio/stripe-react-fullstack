import { configureApiRoot } from 'utils/config';

export enum Path {
  HOME = '/',
  AUTH = '/auth',
  CHECKOUT = '/checkout'
}

export enum ApiEndpoint {
  LOGIN_WITH_PASSWORD = '/auth/password',
  LOGIN_WITH_JWT = '/auth/jwt',
  SIGNUP = '/signup',
  PAYMENT = '/stripe'
}

export const ROOT_API_URL = configureApiRoot();
