import Notifications, { Props, Handlers } from '../components/Notifications';
import { dismissNotification, DismissNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';

const mapState = (state: RootState): Props => {
  return { notifications: state.notifications };
};

const mapDispatch = (dispatch: Dispatch<DismissNotification>): Handlers => ({
  onDismiss: (message: string) => {
    dispatch(dismissNotification(message));
  }
});

export default connect(mapState, mapDispatch)(Notifications);
