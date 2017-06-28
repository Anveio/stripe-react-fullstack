import { NotificationAction } from '../actions/notifications';
import {
  PUSH_NOTIFICATION,
  DISMISS_NOTIFICATION_BY_MESSAGE
} from '../constants';

const initialState = {
  fromServer: []
};

export default (
  state: NotificationsState = initialState,
  action: NotificationAction
) => {
  let partialState: Partial<NotificationsState> | undefined;

  switch (action.type) {
    case PUSH_NOTIFICATION:
      const { status, title, message } = action.data;

      partialState = {
        fromServer: state.fromServer.concat({
          status,
          title,
          message
        })
      };
      break;
    case DISMISS_NOTIFICATION_BY_MESSAGE:
      partialState = {
        fromServer: state.fromServer.filter(el => el.message !== action.message)
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
