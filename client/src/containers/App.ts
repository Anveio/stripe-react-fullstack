import App, { Props, Handlers } from '../components/App';
import axios from 'axios';
import { connect, Dispatch } from 'react-redux';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { NotificationAction, pushNotification } from '../actions/notifications';

import { ROOT_API_URL } from '../constants';

const mapState = (state: RootState): Props => {
  return {
    currentUser: state.currentUser
  };
};

interface JwtConnectionSuccess {
  email: string;
}

const mapDispatch = (
  dispatch: Dispatch<AccountConnectionAction | NotificationAction>
): Handlers => ({
  onBoot: () => {
    axios
      .post(`${ROOT_API_URL}/connect/jwt`, {
        token: window.localStorage.getItem('jwt')
      })
      .then(
        response => {
          dispatch(
            connectAccount({
              email: (response.data as JwtConnectionSuccess).email,
              token: window.localStorage.getItem('jwt')
            })
          );
          // tslint:disable-next-line:no-console
          console.log('Authentication successful');
        },
        reject => {
          dispatch(
            connectAccount({
              email: '',
              token: ''
            })
          );
          dispatch(
            pushNotification({
              status: 'warning',
              title: 'Your previous session may have expired.',
              message: 'Please log in again.'
            })
          );
        }
      )
      .catch(e =>
        dispatch(
          pushNotification({
            status: 'critical',
            title: 'warning',
            message: 'Our server couldn\'t process your request.'
          })
        )
      );
  }
});

export default connect(mapState, mapDispatch)(App);
