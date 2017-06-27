import Notifications from '../components/Notifications';
import {
  dismissNotification,
  DismissNotification
} from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (state: RootState) => {
  return { notifications: state.notifications };
};

const mapDispatchToProps = (dispatch: Dispatch<DismissNotification>) => {
  return {
    onDismiss: (message: string) => {
      dispatch(dismissNotification(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
