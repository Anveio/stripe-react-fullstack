import * as React from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';

export interface Props {
  readonly loading: boolean;
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly onChangeEmail: (value: string) => void;
  readonly onChangePassword: (value: string) => void;
  readonly onSubmit: (payload: LoginData) => void;
}

export default (props: Props) => {
  const { email, password, onChangeEmail, onChangePassword, onSubmit } = props;

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

  const errMsg = (error: string | null): string | false => {
    return error ? error : false;
  };

  const validForm = (): boolean => {
    return !(!!email.text && !!password.text);
  };

  return (
    <Layout.Section>
      <Card sectioned>
        <FormLayout>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email address"
              type="email"
              value={email.text}
              onChange={onChangeEmail}
              error={errMsg(email.error)}
            />
            <TextField
              label="Password"
              type="password"
              value={password.text}
              onChange={onChangePassword}
              error={errMsg(password.error)}
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
