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
    console.log('Button Clicked');
    onSubmit({
      email: email.text,
      username: username.text,
      password: password.text,
      passwordConf: password.text
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Form submitted');
    handleSubmit();
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
            />
            <TextField
              label="Username"
              type="text"
              value={username.text}
              placeholder="No spaces, numbers allowed."
              onChange={onChangeUserName}
            />
            <TextField
              label="Password"
              type="password"
              value={password.text}
              placeholder="At least 6 characters."
              min={6}
              onChange={onChangePassword}
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={passwordConf.text}
              placeholder="Same as your password."
              min={6}
              onChange={onChangePasswordConf}
            />
            <br />
            <Button primary icon="circleChevronRight" onClick={handleSubmit}>
              Log in.
            </Button>
          </form>
        </FormLayout>
      </Card>
    </Layout>
  );
};
