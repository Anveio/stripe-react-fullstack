import LoginForm, { Props, Handlers } from '../components/Auth/LoginForm';
import * as actions from '../actions/formAuth';
import { loginFailure } from '../actions/login';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { NotificationAction, pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import history from '../history';
import { ROOT_API_URL } from '../constants';

const mapStateToProps = (state: RootState): Props => {
  const { email, password, loading } = state.authForms.login;
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
    | actions.AuthFormAction<LoginPayload>
    | NotificationAction
    | AccountConnectionAction
  >
): Handlers => {
  return {
    onChange: (key: keyof LoginPayload, value: string) =>
      dispatch(actions.changeAuthFieldText<LoginPayload>('login', key, value)),
    onSubmit: (payload: LoginPayload) => {
      dispatch(actions.submitAuthField('login', payload));
      axios
        .post(`${ROOT_API_URL}/login`, payload)
        .then(
          success => {
            window.localStorage.setItem('jwt', (success.data as JsonWebToken).token);
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
              dispatch(loginFailure(error));
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
            loginFailure({
              message: 'There was problem logging you in. Please try again later.',
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
