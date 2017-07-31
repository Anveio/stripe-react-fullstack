import SignupForm, { Props, Handlers } from '../components/Auth/SignupForm';
import * as actions from '../actions/formAuth';
import { AccountConnectionAction, connectAccount } from '../actions/connection';
import { registerAccountSuccess, registerAccountFailure } from '../actions/signup';
import { pushNotification } from '../actions/notifications';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import history from '../history';
import { ROOT_API_URL } from '../constants';

const mapStateToProps = (state: RootState): Props => {
  const {
    email,
    username,
    password,
    passwordConf,
    loading
  } = state.authForms.signup;

  return {
    email,
    username,
    password,
    passwordConf,
    loading
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<actions.AuthFormAction<SignupPayload> | AccountConnectionAction>
): Handlers => {
  return {
    onChange: (key: keyof SignupPayload, value: string) => {
      dispatch(actions.changeAuthFieldText<SignupPayload>('signup', key, value));
    },
    onSubmit: (payload: SignupPayload) => {
      dispatch(actions.submitAuthField('signup', payload));
      axios
        .post(`${ROOT_API_URL}/signup`, payload)
        .then(
          success => {
            dispatch(registerAccountSuccess());
            window.localStorage.setItem('jwt', (success.data as JsonWebToken).token);
            /**
             * POSTing to /signup will run through passport.js' login 
             * middleware. So if there are no errors at this point we can log-in
             * the user without sending a separate request.
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
            /**
             * If express validator catches an error: 'data' will be a 
             * SignupValidationError[]. If our moongoose User Schema catches an 
             * error: 'data' will be a string.
             */

            const data: ExpressValidatorError[] | string = errors.response.data;
            if (data instanceof Array) {
              dispatch(registerAccountFailure(data));
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
            registerAccountFailure([
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
