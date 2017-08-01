import App, { Props, Handlers } from '../components/App';
import { connect, Dispatch } from 'react-redux';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
// import axios from 'axios';
// import { SERVER_ROOT_URL } from '../constants';

const mapState = (state: RootState): Props => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatch = (dispatch: Dispatch<AccountConnectionAction>): Handlers => ({
  onBoot: () => {
    dispatch(
      connectAccount({
        email: '',
        token: ''
      })
    );
  }
});

export default connect(mapState, mapDispatch)(App);
