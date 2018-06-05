import {
  PUSH_NOTIFICATION,
  DISMISS_NOTIFICATION_BY_MESSAGE
} from '../constants';
import { BannerMessage } from 'types';

export interface DisplayNotification {
  type: PUSH_NOTIFICATION;
  notification: BannerMessage;
}

export interface DismissNotification {
  type: DISMISS_NOTIFICATION_BY_MESSAGE;
  message: string;
}

export type NotificationAction = DismissNotification | DisplayNotification;

export const displayNotification = (
  notification: BannerMessage
): DisplayNotification => ({
  type: PUSH_NOTIFICATION,
  notification
});

export const dismissNotification = (message: string): DismissNotification => ({
  type: DISMISS_NOTIFICATION_BY_MESSAGE,
  message
});
