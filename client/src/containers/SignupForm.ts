import SignupForm, { Props, Handlers } from '../components/Auth/SignupForm';
import * as actions from '../actions/auth';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import history from '../history';
import { SERVER_ROOT_URL } from '../constants';

const mapStateToProps = (state: RootState): Props => {
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

const mapDispatchToProps = (
  dispatch: Dispatch<actions.AuthAction | AccountConnectionAction>
): Handlers => {
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
        .post(`${SERVER_ROOT_URL()}/api/signup`, payload)
        .then(
          success => {
            dispatch(actions.registerAccountSuccess());
            /* POSTing to /api/signup will run through passport.js' login 
            middleware. So if there are no errors at this point we can log-in 
            the user without sending a separate request.
            */
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
                title: 'Account creation successful.',
                message:
                  // tslint:disable-next-line:quotemark
                  "Your account's been made and you're now logged in."
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
