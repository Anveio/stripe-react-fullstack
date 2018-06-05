import { NotificationAction } from '../actions/notifications';
import { DISMISS_NOTIFICATION_BY_MESSAGE } from '../constants';
import { NotificationsState } from 'types';

const initialState: NotificationsState = {
  fromServer: []
};

export default (state = initialState, action: NotificationAction) => {
  switch (action.type) {
    case DISMISS_NOTIFICATION_BY_MESSAGE:
      return {
        fromServer: state.fromServer.filter(el => el.message !== action.message)
      };
    default:
      return state;
  }
};
