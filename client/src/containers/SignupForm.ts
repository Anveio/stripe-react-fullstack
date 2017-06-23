import SignupForm from '../components/Auth/SignupForm';
import * as actions from '../actions/auth';
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
            // console.log(
            //   `Errors in registering user: ${Object.keys(
            //     errors.response.data['0']
            //   )}`
            // );
            dispatch(actions.registerAccountFailure(errors.response.data));
          }
        )
        .catch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
