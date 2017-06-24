import { PushNotification } from '../actions/notifications';
import { PUSH_NOTIFICATION } from '../constants';

const initialState = {
  fromServer: []
};

export default (
  state: NotificationsState = initialState,
  action: PushNotification
) => {
  let partialState: Partial<NotificationsState> | undefined;

  switch (action.type) {
    case PUSH_NOTIFICATION:
      const {
        status,
        title,
        message,
        onDismiss,
        secondaryAction
      } = action.data;

      partialState = {
        fromServer: state.fromServer.concat({
          status,
          title,
          message,
          secondaryAction,
          onDismiss
        })
      };

      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
