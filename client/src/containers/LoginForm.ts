import LoginForm, { Props, Handlers } from '../components/Auth/LoginForm';
import * as actions from '../actions/auth';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { NotificationAction, pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import history from '../history';
import { rootUrl } from '../constants';

const mapStateToProps = (state: RootState): Props => {
  const { email, password, loading } = state.forms.login;
  const account = state.currentUser.account;

  return {
    account,
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
        .post(`${rootUrl()}/api/login`, payload)
        .then(
          success => {
            const response: LoginPayload = success.data;
            dispatch(actions.loginSuccess(response));
            dispatch(connectAccount({ email: response.email }));
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
            const data: PassportAuthError = errors.response.data;
            if (data instanceof Object) {
              dispatch(actions.loginFailure(data));
            } else {
              dispatch(
                pushNotification({
                  status: 'critical',
                  title: 'Login unsuccessful.',
                  message: data
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
