import SignupForm from '../components/Auth/SignupForm';
import * as actions from '../actions/auth';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state: RootState): SignupForm => {
  const { email, username, password, passwordConf } = state.forms.signup;

  return {
    email,
    username,
    password,
    passwordConf
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
      axios.post('/api/signup', payload).then(newUser => {
        dispatch(actions.registerAccountSuccess(newUser));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
