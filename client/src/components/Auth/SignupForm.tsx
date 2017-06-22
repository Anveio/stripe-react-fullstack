import * as React from 'react';
import { Layout, FormLayout, Card, TextField, Button } from '@shopify/polaris';

export interface Props {
  readonly email: DefaultTextField;
  readonly username: DefaultTextField;
  readonly password: DefaultTextField;
  readonly onChangeEmail: (value: string) => void;
  readonly onChangePassword: (value: string) => void;
  readonly onChangeUserName: (value: string) => void;
  readonly onSubmit: (user: User) => void;
}

export default (props: Props) => {
  const {
    email,
    username,
    password,
    onChangeEmail,
    onChangePassword,
    onChangeUserName,
    onSubmit
  } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit({
      email: email.text,
      username: username.text,
      password: password.text
    });
  };

  return (
    <Layout>
      <Card sectioned>
        <FormLayout>
          <form action="post" onSubmit={handleSubmit}>
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
              onChange={onChangePassword}
            />
            <br />
            <Button primary icon="circleChevronRight">
              Log in.
            </Button>
          </form>
        </FormLayout>
      </Card>
    </Layout>
  );
};
