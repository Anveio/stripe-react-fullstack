import Notifications, { Props, Handlers } from '../components/Notifications';
import {
  dismissNotification,
  DismissNotification
} from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (state: RootState): Props => {
  return { notifications: state.notifications };
};

const mapDispatchToProps = (dispatch: Dispatch<DismissNotification>): Handlers => {
  return {
    onDismiss: (message: string) => {
      dispatch(dismissNotification(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
