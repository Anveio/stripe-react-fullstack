import { NotificationAction } from '../actions/notifications';
import { PUSH_NOTIFICATION, DISMISS_NOTIFICATION_BY_MESSAGE } from '../constants';

const initialState: NotificationsState = {
  fromServer: []
};

export default (state = initialState, action: NotificationAction) => {
  let partialState: Partial<NotificationsState> | undefined;

  switch (action.type) {
    case PUSH_NOTIFICATION:
      partialState = {
        fromServer: [ ...state.fromServer, action.data ]
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
