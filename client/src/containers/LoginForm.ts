import LoginForm from '../components/Auth/LoginForm';
import * as actions from '../actions/auth';
import { pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import { rootUrl } from '../constants';

const mapStateToProps = (state: RootState): LoginForm => {
  const { email, password, loading } = state.forms.signup;

  return {
    email,
    password,
    loading
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.AuthAction>) => {
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
        .post(`${rootUrl()}/api/signup`, payload)
        .then(
          newUser => {
            dispatch(actions.loginSuccess());
            dispatch(
              pushNotification({
                status: 'success',
                title: 'Login successful',
                message: 'You\'re now logged in.'
              })
            );
          },
          errors => {
            /*
            If express validator catches an error:
             'data' will be a SignupValidationError[].
            If our moongoose User Schema catches an error:
             'data' will be a string.
            */

            const data: ExpressValidatorError[] | string = errors.response.data;
            if (data instanceof Array) {
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
            actions.loginFailure([
              {
                param: 'server-error',
                msg: reason.msg,
                value: ''
              }
            ])
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
