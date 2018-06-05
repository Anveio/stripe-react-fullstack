import { configureApiRoot } from 'utils/config';

/**
 * Replace this with your Stripe API publishable key at https://dashboard.stripe.com/account/apikeys
 */
export const STRIPE_PUBLISHABLE_TEST_KEY = 'pk_test_lSPPphIp2RSq3TYbez575NQW';

/**
 * Replace with the URL of the site you deployed to Netlify. Make sure it doesn't have "https://" at the beginning.
 */
export const PRODUCTION_FRONTEND_HOSTNAME = `stripe-fullstack-example.shovonhasan.com`;

/**
 * Replace with the URL of the site you deployed to Heroku. Make sure it doesn't have "https://" at the beginning.
 */
export const PRODUCTION_API_HOSTNAME = 'afternoon-falls-86728.herokuapp.com';

export const API_VERSION = 1;

export const ROOT_API_URL = configureApiRoot();

export const UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
export type UPDATE_FIELD_AUTH = typeof UPDATE_FIELD_AUTH;

export const RESET_FIELD_AUTH = 'RESET_FIELD_AUTH';
export type RESET_FIELD_AUTH = typeof RESET_FIELD_AUTH;

export const ERROR_FIELD_AUTH = 'ERROR_FIELD_AUTH';
export type ERROR_FIELD_AUTH = typeof ERROR_FIELD_AUTH;

export const UPDATE_FIELD_TEXT = 'UPDATE_FIELD_TEXT';
export type UPDATE_FIELD_TEXT = typeof UPDATE_FIELD_TEXT;

export const RESET_FORM = 'RESET_FORM';
export type RESET_FORM = typeof RESET_FORM;

export const REGISTER_ACCOUNT_REQUEST = 'REGISTER_ACCOUNT_REQUEST';
export type REGISTER_ACCOUNT_REQUEST = typeof REGISTER_ACCOUNT_REQUEST;

export const REGISTER_ACCOUNT_SUCCESS = 'REGISTER_ACCOUNT_SUCCESS';
export type REGISTER_ACCOUNT_SUCCESS = typeof REGISTER_ACCOUNT_SUCCESS;

export const REGISTER_ACCOUNT_FAILURE = 'REGISTER_ACCOUNT_FAILURE';
export type REGISTER_ACCOUNT_FAILURE = typeof REGISTER_ACCOUNT_FAILURE;

export const SUBMIT_FORM = 'SUBMIT_FORM';
export type SUBMIT_FORM = typeof SUBMIT_FORM;

export const SUBMIT_FORM_AUTH = 'SUBMIT_FORM_AUTH';
export type SUBMIT_FORM_AUTH = typeof SUBMIT_FORM_AUTH;

export const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';
export type PUSH_NOTIFICATION = typeof PUSH_NOTIFICATION;

export const DISMISS_NOTIFICATION_BY_MESSAGE =
  'DISMISS_NOTIFICATION_BY_MESSAGE';

export type DISMISS_NOTIFICATION_BY_MESSAGE = typeof DISMISS_NOTIFICATION_BY_MESSAGE;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LOGIN_REQUEST = typeof LOGIN_REQUEST;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LOGIN_FAILURE = typeof LOGIN_FAILURE;

export const CONNECT_ACCOUNT = 'CONNECT_ACCOUNT';
export type CONNECT_ACCOUNT = typeof CONNECT_ACCOUNT;

export const DISCONNECT_ACCOUNT = 'DISCONNECT_ACCOUNT';
export type DISCONNECT_ACCOUNT = typeof DISCONNECT_ACCOUNT;

export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export type GET_USER_LIST_SUCCESS = typeof GET_USER_LIST_SUCCESS;

export const GET_USER_LIST_FAILURE = 'GET_USER_LIST_FAILURE';
export type GET_USER_LIST_FAILURE = typeof GET_USER_LIST_FAILURE;

export const SHELF_REFRESH_SUCCESS = 'SHELF_REFRESH_SUCCESS';
export type SHELF_REFRESH_SUCCESS = typeof SHELF_REFRESH_SUCCESS;
