import SignupForm from '../components/Auth/SignupForm';
import * as actions from '../actions/auth';
import { pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import { rootUrl } from '../constants';

const mapStateToProps = (state: RootState): SignupForm => {
  const {
    email,
    username,
    password,
    passwordConf,
    loading
  } = state.forms.signup;

  return {
    email,
    username,
    password,
    passwordConf,
    loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.AuthAction>) => {
  return {
    onChangeEmail: (value: string) => {
      dispatch(actions.changeAuthFieldText(value, 'email'));
    },
    onChangeUserName: (value: string) => {
      dispatch(actions.changeAuthFieldText(value, 'username'));
    },
    onChangePassword: (value: string) => {
      dispatch(actions.changeAuthFieldText(value, 'password'));
    },
    onChangePasswordConf: (value: string) => {
      dispatch(actions.changeAuthFieldText(value, 'passwordConf'));
    },
    onSubmit: (payload: SignupPayload) => {
      dispatch(actions.registerAccountRequest(payload));
      axios
        .post(`${rootUrl()}/api/signup`, payload)
        .then(
          newUser => {
            dispatch(actions.registerAccountSuccess());
            dispatch(
              pushNotification({
                status: 'success',
                title: 'Account creation successful.',
                message: 'Your account has successfully been created!'
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
              dispatch(actions.registerAccountFailure(data));
            } else {
              dispatch(
                pushNotification({
                  status: 'critical',
                  title: 'Account creation unsuccessful.',
                  message: data
                })
              );
            }
          }
        )
        .catch(reason => {
          dispatch(
            actions.registerAccountFailure([
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
              title: 'Account creation unsuccessful..',
              message: reason.msg
            })
          );
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
