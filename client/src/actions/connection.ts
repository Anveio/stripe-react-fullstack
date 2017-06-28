import * as constants from '../constants';

export interface ConnectAccount {
  type: constants.CONNECT_ACCOUNT;
  user: User;
}

export interface DisconnectAccount {
  type: constants.DISCONNECT_ACCOUNT;
}

export type AccountConnectionAction = DisconnectAccount | ConnectAccount;

export const connectAccount = (user: User) => {
  return {
    type: constants.CONNECT_ACCOUNT,
    user
  };
};
