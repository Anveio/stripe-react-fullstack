import { connect, Dispatch } from 'react-redux';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import App, { Props, Handlers } from '../components/App';
// import axios from 'axios';
// import { SERVER_ROOT_URL } from '../constants';

const mapStateToProps = (state: RootState): Props => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AccountConnectionAction>
): Handlers => {
  return {
    onBoot: () => {
      dispatch(
        connectAccount({
          email: 'hi',
          token: 'hi'
        })
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
