import * as constants from '../constants';

export interface PushNotification {
  type: constants.PUSH_NOTIFICATION;
  data: ServerMessage;
}

export interface DismissNotification {
  type: constants.DISMISS_NOTIFICATION;
}

export type NotificationAction = DismissNotification | PushNotification;

export const pushNotification = (data: ServerMessage): PushNotification => {
  return {
    type: constants.PUSH_NOTIFICATION,
    data
  };
};

export const dismissNotification = (): DismissNotification => {
  return {
    type: constants.DISMISS_NOTIFICATION
  };
};
