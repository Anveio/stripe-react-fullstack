import { NotificationAction } from '../actions/notifications';
import { PUSH_NOTIFICATION, DISMISS_NOTIFICATION } from '../constants';

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
    case DISMISS_NOTIFICATION:
      partialState = {
        fromServer: []
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
