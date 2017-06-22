// Might be best to put this in a separate file. 
// It's here for now for simplicity's sake.
export const rootUrl  = () => {
  switch (window.location.hostname) {
    case 'reduxbusinesssample.herokuapp.com':
      return 'https://reduxbusinesssample.herokuapp.com';
    case 'www.simplemarketplace.com': // Tentative Domain name for website.
      return 'https://www.simplemarketplace.com';
    default: return 'http://localhost:3000';
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

export const CONNECT_ACCOUNT = 'CONNECT_ACCOUNT';
export type CONNECT_ACCOUNT = typeof CONNECT_ACCOUNT;

export const DISCONNECT_ACCOUNT = 'DISCONNECT_ACCOUNT';
export type DISCONNECT_ACCOUNT = typeof DISCONNECT_ACCOUNT;

export const UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD';
export type UPDATE_TEXT_FIELD = typeof UPDATE_TEXT_FIELD;

export const RESET_TEXT_FIELD = 'RESET_TEXT_FIELD';
export type RESET_TEXT_FIELD = typeof RESET_TEXT_FIELD;

export const SUBMIT_FORM = 'SUBMIT_FORM';
export type SUBMIT_FORM = typeof SUBMIT_FORM;
