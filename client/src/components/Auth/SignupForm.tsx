import * as React from 'react';
import { Layout, FormLayout, Card, TextField, Button } from '@shopify/polaris';

export interface Props {
  readonly email: AuthTextField;
  readonly username: AuthTextField;
  readonly password: AuthTextField;
  readonly passwordConf: AuthTextField;
  readonly onChangeEmail: (value: string) => void;
  readonly onChangeUserName: (value: string) => void;
  readonly onChangePassword: (value: string) => void;
  readonly onChangePasswordConf: (value: string) => void;
  readonly onSubmit: (payload: RegistrationData) => void;
}

export default (props: Props) => {
  const {
    email,
    username,
    password,
    passwordConf,
    onChangeEmail,
    onChangeUserName,
    onChangePassword,
    onChangePasswordConf,
    onSubmit
  } = props;

  const handleSubmit = (): void => {
    onSubmit({
      email: email.text,
      username: username.text,
      password: password.text,
      passwordConf: passwordConf.text
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit();
  };

  const errMsg = (error: string | null): string | false => {
    return error ? error : false;
  };

  const validForm = (): boolean => {
    // Todo: add realtime client side validation
    return !(
      !!email.text &&
      !!username.text &&
      !!password.text &&
      !!passwordConf.text
    );
  };

  return (
    <Layout>
      <Card sectioned>
        <FormLayout>
          <form action="post" onSubmit={handleFormSubmit}>
            <TextField
              label="Email address"
              type="email"
              value={email.text}
              placeholder="e.g. name@business.com"
              onChange={onChangeEmail}
              error={errMsg(email.error)}
              spellCheck={false}
            />
            <TextField
              label="Username"
              type="text"
              value={username.text}
              placeholder="No spaces, numbers allowed."
              onChange={onChangeUserName}
              error={errMsg(username.error)}
              spellCheck={false}
            />
            <TextField
              label="Password"
              type="password"
              value={password.text}
              placeholder="At least 6 characters."
              min={6}
              onChange={onChangePassword}
              error={errMsg(password.error)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={passwordConf.text}
              placeholder="Same as your password."
              min={6}
              onChange={onChangePasswordConf}
              error={errMsg(passwordConf.error)}
            />
            <br />
            <Button
              primary
              icon="circleChevronUp"
              onClick={handleSubmit}
              disabled={validForm()}
            >
              Sign up.
            </Button>
          </form>
        </FormLayout>
      </Card>
    </Layout>
  );
};
