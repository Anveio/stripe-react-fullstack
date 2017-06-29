import PageHeader from '../components/Navigation/PageHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState): CurrentUserState => {
  return { account: state.currentUser.account };
};

export default connect(mapStateToProps)(PageHeader);
