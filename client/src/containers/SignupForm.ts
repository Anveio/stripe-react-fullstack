import SignupForm from '../components/Auth/SignupForm';
import * as actions from '../actions/auth';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (state: RootState): SignupForm => {
  const { email, username, password } = state.forms.signup;

  return {
    email,
    username,
    password
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
