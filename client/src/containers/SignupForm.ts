import SignupForm from '../components/Auth/SignupForm';
import * as actions from '../actions/auth';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import { rootUrl } from '../constants';

const mapStateToProps = (state: RootState): SignupForm => {
  const {
    validationError,
    email,
    username,
    password,
    passwordConf,
    loading
  } = state.forms.signup;

  return {
    validationError,
    email,
    username,
    password,
    passwordConf,
    loading
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.AuthAction>) => {
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
    onSubmit: (payload: RegistrationData) => {
      dispatch(actions.registerAccountRequest(payload));
      axios
        .post(`${rootUrl()}/api/signup`, payload)
        .then(
          newUser => {
            dispatch(actions.registerAccountSuccess());
          },
          errors => {
            dispatch(actions.registerAccountFailure(errors.response.data));
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
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
