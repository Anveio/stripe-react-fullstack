import * as constants from '../constants';

export interface ConnectAccount {
  type: constants.CONNECT_ACCOUNT;
  user: PublicUserInfo;
}

export interface DisconnectAccount {
  type: constants.DISCONNECT_ACCOUNT;
}

export type AccountConnectionAction = DisconnectAccount | ConnectAccount;

export const connectAccount = (user: PublicUserInfo) => {
  return {
    type: constants.CONNECT_ACCOUNT,
    user
  };
};

export const disconnectAccount = () => {
  return {
    type: constants.DISCONNECT_ACCOUNT
  };
};
