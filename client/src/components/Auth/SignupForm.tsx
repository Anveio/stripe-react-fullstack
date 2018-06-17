import * as React from 'react';
import { Layout, FormLayout, Card, Button } from '@shopify/polaris';

import { PasswordField, PasswordConfField, EmailField } from './AuthTextFields';
import { SignupForm, SignupPayload, RootState, FormErrorMap } from 'types';
import { Dispatch, connect } from 'react-redux';
import { AuthFormAction, changeAuthFieldText } from 'actions/formAuth';
import {
  registerAccountSuccess,
  registerAccountFailure,
  RegisterAccountAction,
  registerAccountRequest
} from 'actions/signup';
import { pushToAppHistory } from 'utils/history';
import { Path } from 'constants/routes';
import { LoginSuccess, loginSuccess } from 'actions/login';
import { sendUserRegistrationRequest } from 'api/signup';
import { resolveSignupErrors } from 'utils/errorHandlers';

interface Props {
  readonly loading: boolean;
  readonly email: string;
  readonly password: string;
  readonly passwordConf: string;
  readonly errors: FormErrorMap<SignupPayload>;
}

interface Handlers {
  readonly onChange: (key: keyof SignupForm, value: string) => void;
  readonly onSubmit: (payload: SignupPayload) => void;
}

const SignupForm = (props: Props & Handlers) => {
  const { email, password, passwordConf, onSubmit, onChange, errors } = props;

  const updateField = (key: keyof SignupForm) => (value: string) => {
    onChange(key, value);
  };

  const handleSignUp = (): void => {
    onSubmit({
      email: email,
      password: password,
      passwordConf: passwordConf
    });
  };

  const validForm = (): boolean => {
    return !(!!email && !!password && !!passwordConf);
  };

  const watchForEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13) {
      event.preventDefault();
      handleSignUp();
    }
  };

  return (
    <Layout.Section>
      <Card sectioned>
        <FormLayout>
          <div onKeyPress={watchForEnter}>
            <EmailField
              kind="login"
              text={email}
              onChange={updateField('email')}
              error={errors.email}
            />
            <PasswordField
              kind="login"
              text={password}
              onChange={updateField('password')}
              error={errors.password}
            />
            <PasswordConfField
              kind="login"
              text={passwordConf}
              onChange={updateField('passwordConf')}
              error={errors.passwordConf}
            />
          </div>
          <Button
            primary
            loading={props.loading}
            icon="circleChevronRight"
            onClick={handleSignUp}
            disabled={validForm()}
            accessibilityLabel="Sign up"
          >
            Sign up.
          </Button>
        </FormLayout>
      </Card>
    </Layout.Section>
  );
};

const mapStateToProps = (state: RootState): Props => {
  const {
    email,
    password,
    passwordConf,
    loading,
    errors
  } = state.authForms.signup;

  return {
    email,
    password,
    passwordConf,
    loading,
    errors
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    AuthFormAction<SignupPayload> | RegisterAccountAction | LoginSuccess
  >
): Handlers => ({
  onChange: (key: keyof SignupPayload, value: string) => {
    dispatch(changeAuthFieldText<SignupPayload>('signup', key, value));
  },
  onSubmit: async (payload: SignupPayload) => {
    dispatch(registerAccountRequest);
    try {
      const data = await sendUserRegistrationRequest(payload);
      dispatch(registerAccountSuccess());
      /**
       * POSTing to /signup will run through passport.js' login
       * middleware. So if there are no errors at this point we can log-in
       * the user without sending a separate request.
       */
      dispatch(loginSuccess(data.email, data.token));
      pushToAppHistory(Path.HOME);
    } catch (e) {
      const errors = resolveSignupErrors(e);
      dispatch(registerAccountFailure(errors));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
