import * as React from 'react';
import {
  Layout,
  Card,
  FormLayout,
  Button,
  DisplayText
} from '@shopify/polaris';
import { PasswordField, EmailField } from './AuthTextFields';
import { connect, Dispatch } from 'react-redux';
import { AuthTextField, UserState, LoginPayload, RootState } from 'types';
import { AuthFormAction, changeAuthFieldText } from 'actions/formAuth';
import {
  loginFailure,
  loginSuccess,
  LoginAction,
  loginRequest
} from 'actions/login';
import { pushToAppHistory } from 'utils/history';
import { Path } from 'constants/routes';
import { loginWithPassword } from 'api/login';

export interface Props {
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly loading: boolean;
  readonly currentUser: UserState;
}

export interface Handlers {
  readonly onChange: (key: keyof LoginPayload, value: string) => void;
  readonly onSubmit: (payload: LoginPayload) => void;
}

const LoginForm = (props: Props & Handlers) => {
  const { email, password, onChange, onSubmit, currentUser } = props;

  const handleLogIn = (): void => {
    onSubmit({
      email: email.text,
      password: password.text
    });
  };

  const updateField = (key: keyof LoginPayload) => (value: string) => {
    onChange(key, value);
  };

  const validForm = (): boolean => {
    return !email.text && !password.text;
  };

  const watchForEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13) {
      event.preventDefault();
      handleLogIn();
    }
  };

  const loggedOutMarkup = () => {
    return (
      <Layout.Section>
        <Card sectioned>
          <FormLayout>
            <div onKeyPress={watchForEnter}>
              <EmailField
                kind="login"
                field={email}
                onChange={updateField('email')}
              />
              <PasswordField
                kind="login"
                field={password}
                onChange={updateField('password')}
              />
            </div>
            <Button
              primary
              icon="circleChevronRight"
              loading={props.loading}
              onClick={handleLogIn}
              disabled={validForm()}
            >
              Log in.
            </Button>
          </FormLayout>
        </Card>
      </Layout.Section>
    );
  };

  const loggedInMarkup = (user: UserState) => {
    return (
      <Layout.Section>
        <Card sectioned>
          <DisplayText size="medium">
            You're logged in with the email '{user.email}'.
          </DisplayText>
        </Card>
      </Layout.Section>
    );
  };

  return currentUser.email ? loggedInMarkup(currentUser) : loggedOutMarkup();
};

const mapState = (state: RootState): Props => {
  const { email, password, loading } = state.authForms.login;
  const currentUser = state.currentUser;

  return {
    currentUser,
    email,
    password,
    loading
  };
};

const mapDispatch = (
  dispatch: Dispatch<AuthFormAction<LoginPayload> | LoginAction>
): Handlers => ({
  onChange: (key: keyof LoginPayload, value: string) =>
    dispatch(changeAuthFieldText<LoginPayload>('login', key, value)),
  onSubmit: async (payload: LoginPayload) => {
    dispatch(loginRequest);
    try {
      const { token } = await loginWithPassword(payload);

      dispatch(loginSuccess(payload.email, token));
      pushToAppHistory(Path.HOME);
    } catch (e) {
      dispatch(
        loginFailure({
          message: 'Incorrect email'
        })
      );
      console.warn(e);
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(LoginForm);
