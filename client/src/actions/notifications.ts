import * as constants from '../constants';

export interface PushNotification {
  type: constants.PUSH_NOTIFICATION;
  data: ServerMessage;
}

export interface DismissNotification {
  type: constants.DISMISS_NOTIFICATION_BY_MESSAGE;
  message: string;
}

export type NotificationAction = DismissNotification | PushNotification;

export const pushNotification = (data: ServerMessage): PushNotification => {
  return {
    type: constants.PUSH_NOTIFICATION,
    data
  };
};

export const dismissNotification = (message: string): DismissNotification => ({
  type: constants.DISMISS_NOTIFICATION_BY_MESSAGE,
  message
});
