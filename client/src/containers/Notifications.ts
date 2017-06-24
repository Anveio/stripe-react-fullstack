import Notifications from '../components/Notifications';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState): NotificationsState => {
  return state.notifications;
};

export default connect(mapStateToProps)(Notifications);
