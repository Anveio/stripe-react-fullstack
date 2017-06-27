import * as constants from '../constants';

export interface ConnectAccount {
  type: constants.CONNECT_ACCOUNT;
  data: LoginPayload;
}

export interface DisconnectAccount {
  type: constants.DISCONNECT_ACCOUNT;
}

export type AccountConnectionAction = DisconnectAccount | ConnectAccount;

export const connectAccount = (data: LoginPayload) => {
  return {
    type: constants.CONNECT_ACCOUNT,
    data
  };
};
