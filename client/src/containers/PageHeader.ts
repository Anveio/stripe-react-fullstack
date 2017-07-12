import PageHeader from '../components/Navigation/PageHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState): UserState => {
  return { email: state.currentUser.email, token: state.currentUser.token };
};

export default connect(mapStateToProps)(PageHeader);
