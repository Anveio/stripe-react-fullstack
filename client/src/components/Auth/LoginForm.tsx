import * as React from 'react';
import {
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
  DisplayText
} from '@shopify/polaris';

export interface Props {
  readonly loading: boolean;
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly account: User | null;
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
    account
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
      <Layout.Section>
        <Card sectioned>
          <FormLayout>
            <DisplayText size="medium">Log in.</DisplayText>
            <form onSubmit={handleSubmit} acceptCharset="ISO-8859-1">
              <TextField
                label="Email address"
                type="email"
                value={email.text}
                onChange={onChangeEmail}
                error={email.error || false}
                autoFocus
              />
              <TextField
                label="Password"
                type="password"
                value={password.text}
                onChange={onChangePassword}
                error={password.error || false}
              />
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
      </Layout.Section>
    );
  };

  const loggedInMarkup = (user: User) => {
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

  return account ? loggedInMarkup(account) : loggedOutMarkup();
};
