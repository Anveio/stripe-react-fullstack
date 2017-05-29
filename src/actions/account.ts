import * as constants from '../constants';

export interface ConnectAccount {
  type: constants.CONNECT_ACCOUNT;
}

export interface DisconnectAccount {
  type: constants.DISCONNECT_ACCOUNT;
}

export type AccountAction = ConnectAccount | DisconnectAccount;

export function connectAccount(): ConnectAccount {
  return {
    type: constants.CONNECT_ACCOUNT
  };
}

export function disconnectAccount(): DisconnectAccount {
  return {
    type: constants.DISCONNECT_ACCOUNT
  };
}