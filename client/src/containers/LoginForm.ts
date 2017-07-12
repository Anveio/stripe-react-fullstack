import LoginForm, { Props, Handlers } from '../components/Auth/LoginForm';
import * as actions from '../actions/auth';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { NotificationAction, pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import history from '../history';
import { SERVER_ROOT_URL } from '../constants';

const mapStateToProps = (state: RootState): Props => {
  const { email, password, loading } = state.forms.login;
  const currentUser = state.currentUser;

  return {
    currentUser,
    email,
    password,
    loading
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    actions.AuthAction | NotificationAction | AccountConnectionAction
  >
): Handlers => {
  return {
    onChangeEmail: (value: string) => {
      dispatch(actions.changeAuthFieldText(value, 'email'));
    },
    onChangePassword: (value: string) => {
      dispatch(actions.changeAuthFieldText(value, 'password'));
    },
    onSubmit: (payload: LoginPayload) => {
      dispatch(actions.loginRequest(payload));
      axios
        .post(`${SERVER_ROOT_URL()}/api/login`, payload)
        .then(
          success => {
            window.localStorage.setItem(
              'jwt',
              (success.data as JsonWebToken).token
            );
            dispatch(actions.loginSuccess(payload));
            dispatch(
              connectAccount({
                email: payload.email,
                token: (success.data as JsonWebToken).token
              })
            );
            history.push('/');
            dispatch(
              pushNotification({
                status: 'success',
                title: 'Login successful',
                // tslint:disable-next-line:quotemark
                message: "You're now logged in."
              })
            );
          },
          errors => {
            const error: PassportAuthError = errors.response.data;
            // Our server gives us errors in different types depending on the error.
            // Todo: Normalize error messages from server on login failure.
            if (error && error.message) {
              dispatch(actions.loginFailure(error));
            } else {
              dispatch(
                pushNotification({
                  status: 'critical',
                  title: 'Login unsuccessful.',
                  message: 'There were errors with your login information.'
                })
              );
            }
          }
        )
        .catch(reason => {
          dispatch(
            actions.loginFailure({
              message:
                'There was problem logging you in. Please try again later.',
              name: 'miscError'
            })
          );
          dispatch(
            pushNotification({
              status: 'critical',
              title: 'Login unsuccessful.',
              message: reason.msg
            })
          );
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
