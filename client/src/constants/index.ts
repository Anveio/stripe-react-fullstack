// Might be best to put this in a separate file.
// It's here for now for simplicity's sake.
export const SERVER_ROOT_URL = () => {
  switch (window.location.hostname) {
    case 'reduxbusinesssample.herokuapp.com':
      return 'https://reduxbusinesssample.herokuapp.com';
    case 'www.simplemarketplace.com': // Tentative Domain name for website.
      return 'https://www.simplemarketplace.com';
    default:
      return 'http://localhost:4000';
  }
};

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export const UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
export type UPDATE_FIELD_AUTH = typeof UPDATE_FIELD_AUTH;

export const REGISTER_ACCOUNT_REQUEST = 'REGISTER_ACCOUNT_REQUEST';
export type REGISTER_ACCOUNT_REQUEST = typeof REGISTER_ACCOUNT_REQUEST;

export const REGISTER_ACCOUNT_SUCCESS = 'REGISTER_ACCOUNT_SUCCESS';
export type REGISTER_ACCOUNT_SUCCESS = typeof REGISTER_ACCOUNT_SUCCESS;

export const REGISTER_ACCOUNT_FAILURE = 'REGISTER_ACCOUNT_FAILURE';
export type REGISTER_ACCOUNT_FAILURE = typeof REGISTER_ACCOUNT_FAILURE;

export const UPDATE_FIELD_TEXT = 'UPDATE_FIELD_TEXT';
export type UPDATE_FIELD_TEXT = typeof UPDATE_FIELD_TEXT;

export const RESET_TEXT_FIELD = 'RESET_TEXT_FIELD';
export type RESET_TEXT_FIELD = typeof RESET_TEXT_FIELD;

export const SUBMIT_FORM = 'SUBMIT_FORM';
export type SUBMIT_FORM = typeof SUBMIT_FORM;

export const PUSH_SUCCESS_NOTIFICATION = 'PUSH_SUCCESS_NOTIFICATION';
export type PUSH_SUCCESS_NOTIFICATION = typeof PUSH_SUCCESS_NOTIFICATION;

export const PUSH_WARNING_NOTIFICATION = 'PUSH_WARNING_NOTIFICATION';
export type PUSH_WARNING_NOTIFICATION = typeof PUSH_WARNING_NOTIFICATION;

export const PUSH_CRITICAL_NOTIFICATION = 'PUSH_CRITICAL_NOTIFICATION';
export type PUSH_CRITICAL_NOTIFICATION = typeof PUSH_CRITICAL_NOTIFICATION;

export const PUSH_INFO_NOTIFICATION = 'PUSH_INFO_NOTIFICATION';
export type PUSH_INFO_NOTIFICATION = typeof PUSH_INFO_NOTIFICATION;

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
