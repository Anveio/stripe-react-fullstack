import * as React from 'react';
import {
  Layout,
  Card,
  FormLayout,
  Button,
  DisplayText
} from '@shopify/polaris';

import { PasswordField, EmailField } from './AuthTextFields';

export interface Props {
  readonly loading: boolean;
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly currentUser: UserState;
}

export interface Handlers {
  readonly onChangeEmail: (value: string) => void;
  readonly onChangePassword: (value: string) => void;
  readonly onSubmit: (payload: LoginPayload) => void;
}

export default (props: Props & Handlers) => {
  const {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    currentUser
  } = props;

  const handleLogIn = (): void => {
    onSubmit({
      email: email.text,
      password: password.text
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleLogIn();
  };

  const validForm = (): boolean => {
    return !email.text && !password.text;
  };

  const loggedOutMarkup = () => {
    return (
      <Layout sectioned>
        <Card sectioned>
          <FormLayout>
            <DisplayText size="medium">Log in.</DisplayText>
            <form onSubmit={handleSubmit} acceptCharset="ISO-8859-1">
              <EmailField field={email} onChange={onChangeEmail} />
              <PasswordField field={password} onChange={onChangePassword} />
              <br />
              <Button
                primary
                icon="circleChevronRight"
                onClick={handleLogIn}
                disabled={validForm()}
              >
                Log in.
              </Button>
            </form>
          </FormLayout>
        </Card>
      </Layout>
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
