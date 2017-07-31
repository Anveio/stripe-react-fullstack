import * as React from 'react';
import { Layout, DisplayText, FormLayout, Card, Button } from '@shopify/polaris';

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
  readonly onChange: (key: keyof SignupForm, value: string) => void;
  readonly onSubmit: (payload: SignupPayload) => void;
}

const SignupForm = (props: Props & Handlers) => {
  const { email, username, password, passwordConf, onSubmit, onChange } = props;

  const updateField = (key: keyof SignupForm) => (value: string) => {
    onChange(key, value);
  };

  const handleSignUp = (): void => {
    onSubmit({
      email: email.text,
      username: username.text,
      password: password.text,
      passwordConf: passwordConf.text
    });
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

  const watchForEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13) {
      event.preventDefault();
      handleSignUp();
    }
  };

  return (
    <Layout sectioned>
      <Card sectioned>
        <FormLayout>
          <div onKeyPress={watchForEnter}>
            <DisplayText size="medium">Create an account.</DisplayText>
            <EmailField field={email} onChange={updateField('email')} />
            <UsernameField field={username} onChange={updateField('username')} />
            <PasswordField field={password} onChange={updateField('password')} />
            <PasswordConfField
              field={passwordConf}
              onChange={updateField('passwordConf')}
            />
          </div>
          <Button
            primary
            icon="circleChevronRight"
            onClick={handleSignUp}
            disabled={validForm()}
            accessibilityLabel="Sign up"
          >
            Sign up.
          </Button>
        </FormLayout>
      </Card>
    </Layout>
  );
};

export default SignupForm;
