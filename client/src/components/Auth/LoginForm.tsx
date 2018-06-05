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
import {
  AuthTextField,
  UserState,
  LoginPayload,
  RootState,
  JsonWebToken,
  PassportAuthError
} from 'types';
import {
  AuthFormAction,
  changeAuthFieldText,
  submitAuthField
} from 'actions/formAuth';
import { NotificationAction, pushNotification } from 'actions/notifications';
import { AccountConnectionAction, connectAccount } from 'actions/connection';
import Axios from 'axios';
import { ROOT_API_URL } from '../../constants';
import { loginFailure, LoginFailure } from 'actions/login';
import { pushToWindowHistory } from 'utils/history';
import { Routes } from 'constants/routes';

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
            <DisplayText size="medium">Log in.</DisplayText>
            <div onKeyPress={watchForEnter}>
              <EmailField field={email} onChange={updateField('email')} />
              <PasswordField
                field={password}
                onChange={updateField('password')}
              />
            </div>
            <Button
              primary
              icon="circleChevronRight"
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
  dispatch: Dispatch<
    | AuthFormAction<LoginPayload>
    | NotificationAction
    | AccountConnectionAction
    | LoginFailure
  >
): Handlers => {
  return {
    onChange: (key: keyof LoginPayload, value: string) =>
      dispatch(changeAuthFieldText<LoginPayload>('login', key, value)),
    onSubmit: (payload: LoginPayload) => {
      dispatch(submitAuthField('login', payload));
      Axios.post(`${ROOT_API_URL}/login`, payload)
        .then(
          success => {
            window.localStorage.setItem(
              'jwt',
              (success.data as JsonWebToken).token
            );
            dispatch(
              connectAccount({
                email: payload.email,
                token: (success.data as JsonWebToken).token
              })
            );
            pushToWindowHistory(Routes.HOME);
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
            const error: PassportAuthError = errors.response.data;
            // Our server gives us errors in different types depending on the error.
            // Todo: Normalize error messages from server on login failure.
            if (error && error.message) {
              dispatch(loginFailure(error));
            } else {
              dispatch(
                pushNotification({
                  status: 'critical',
                  title: 'Login unsuccessful.',
                  message: 'There were errors with your login information.'
                })
              );
            }
          }
        )
        .catch(reason => {
          dispatch(
            loginFailure({
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

export default connect(
  mapState,
  mapDispatch
)(LoginForm);
