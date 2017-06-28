import LoginForm from '../components/Auth/LoginForm';
import * as actions from '../actions/auth';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { NotificationAction, pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import { rootUrl } from '../constants';

const mapStateToProps = (state: RootState): LoginForm => {
  const { email, password, loading } = state.forms.login;

  return {
    email,
    password,
    loading
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    actions.AuthAction | NotificationAction | AccountConnectionAction
  >
) => {
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
          json => {
            dispatch(actions.loginSuccess(payload));
            dispatch(connectAccount({ email: payload.email }));
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
            // console.log(errors.response.data);
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
