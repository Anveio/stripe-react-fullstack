import * as constants from '../constants';

export interface PushNotification {
  type: constants.PUSH_NOTIFICATION;
  data: ServerMessage;
}

export const pushNotification = (data: ServerMessage): PushNotification => {
  return {
    type: constants.PUSH_NOTIFICATION,
    data
  };
};
