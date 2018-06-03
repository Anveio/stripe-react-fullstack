import { NotificationAction } from '../actions/notifications';
import {
  PUSH_NOTIFICATION,
  DISMISS_NOTIFICATION_BY_MESSAGE
} from '../constants';
import { NotificationsState } from 'types';

const initialState: NotificationsState = {
  fromServer: []
};

export default (state = initialState, action: NotificationAction) => {
  switch (action.type) {
    case PUSH_NOTIFICATION:
      return {
        fromServer: [...state.fromServer, action.data]
      };
    case DISMISS_NOTIFICATION_BY_MESSAGE:
      return {
        fromServer: state.fromServer.filter(el => el.message !== action.message)
      };
    default:
      return state;
  }
};
