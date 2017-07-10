import * as React from 'react';
import {
  Layout,
  DisplayText,
  FormLayout,
  Card,
  Button
} from '@shopify/polaris';

import {
  PasswordField,
  PasswordConfField,
  EmailField,
  UsernameField
} from './AuthTextFields';

export interface Props {
  readonly loading: boolean;
  readonly email: AuthTextField;
  readonly username: AuthTextField;
  readonly password: AuthTextField;
  readonly passwordConf: AuthTextField;
}

export interface Handlers {
  readonly onChangeEmail: (value: string) => void;
  readonly onChangeUserName: (value: string) => void;
  readonly onChangePassword: (value: string) => void;
  readonly onChangePasswordConf: (value: string) => void;
  readonly onSubmit: (payload: SignupPayload) => void;
}

export default (props: Props & Handlers) => {
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

  const handleSignUp = (): void => {
    onSubmit({
      email: email.text,
      username: username.text,
      password: password.text,
      passwordConf: passwordConf.text
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSignUp();
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
          <DisplayText size="medium">Create an account.</DisplayText>
          <form onSubmit={handleSubmit} acceptCharset="UTF-8">
            <EmailField field={email} onChange={onChangeEmail} />
            <UsernameField field={username} onChange={onChangeUserName} />
            <PasswordField field={password} onChange={onChangePassword} />
            <PasswordConfField
              field={passwordConf}
              onChange={onChangePasswordConf}
            />
            <br />
            <Button
              primary
              icon="circleChevronRight"
              onClick={handleSignUp}
              disabled={validForm()}
              accessibilityLabel="Sign up"
            >
              Sign up.
            </Button>
          </form>
        </FormLayout>
      </Card>
    </Layout>
  );
};
