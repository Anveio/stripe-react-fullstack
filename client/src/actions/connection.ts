import * as constants from '../constants';
import { UserState } from 'types';

export interface ConnectAccount {
  type: constants.CONNECT_ACCOUNT;
  user: UserState;
}

export interface DisconnectAccount {
  type: constants.DISCONNECT_ACCOUNT;
}

export type AccountConnectionAction = DisconnectAccount | ConnectAccount;

export const connectAccount = (user: UserState): ConnectAccount => ({
  type: constants.CONNECT_ACCOUNT,
  user
});

export const disconnectAccount = (): DisconnectAccount => ({
  type: constants.DISCONNECT_ACCOUNT
});
