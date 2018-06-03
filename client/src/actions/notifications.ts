import {
  PUSH_NOTIFICATION,
  DISMISS_NOTIFICATION_BY_MESSAGE
} from '../constants';
import { ServerMessage } from 'types';

export interface PushNotification {
  type: PUSH_NOTIFICATION;
  data: ServerMessage;
}

export interface DismissNotification {
  type: DISMISS_NOTIFICATION_BY_MESSAGE;
  message: string;
}

export type NotificationAction = DismissNotification | PushNotification;

export const pushNotification = (data: ServerMessage): PushNotification => {
  return {
    type: PUSH_NOTIFICATION,
    data
  };
};

export const dismissNotification = (message: string): DismissNotification => ({
  type: DISMISS_NOTIFICATION_BY_MESSAGE,
  message
});
