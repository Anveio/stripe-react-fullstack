import { CONNECT_ACCOUNT, DISCONNECT_ACCOUNT } from '../constants';

export interface ConnectAccount {
  readonly type: CONNECT_ACCOUNT;
  readonly email: string;
  readonly token: string;
}

export interface DisconnectAccount {
  readonly type: DISCONNECT_ACCOUNT;
}

export type AccountConnectionAction = DisconnectAccount | ConnectAccount;

export interface ConnectAccountAction {
  (email: string, token: string): ConnectAccount;
}

export const connectAccount: ConnectAccountAction = (email, token) => ({
  type: CONNECT_ACCOUNT,
  email,
  token
});

export const disconnectAccount = (): DisconnectAccount => ({
  type: DISCONNECT_ACCOUNT
});
