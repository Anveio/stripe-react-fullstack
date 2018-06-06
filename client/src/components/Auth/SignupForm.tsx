import * as React from 'react';
import { Layout, FormLayout, Card, Button } from '@shopify/polaris';

import { PasswordField, PasswordConfField, EmailField } from './AuthTextFields';
import {
  AuthTextField,
  SignupForm,
  SignupPayload,
  RootState,
  JsonWebToken,
  ExpressValidatorError
} from 'types';
import { Dispatch, connect } from 'react-redux';
import { AuthFormAction, changeAuthFieldText } from 'actions/formAuth';
import { AccountConnectionAction, connectAccount } from 'actions/connection';
import Axios from 'axios';
import {
  registerAccountSuccess,
  registerAccountFailure,
  RegisterAccountAction
} from 'actions/signup';
import { ROOT_API_URL } from '../../constants';
import { pushToAppHistory } from 'utils/history';
import { Path } from 'constants/routes';

interface Props {
  readonly loading: boolean;
  readonly email: AuthTextField;
  readonly password: AuthTextField;
  readonly passwordConf: AuthTextField;
}

interface Handlers {
  readonly onChange: (key: keyof SignupForm, value: string) => void;
  readonly onSubmit: (payload: SignupPayload) => void;
}

const SignupForm = (props: Props & Handlers) => {
  const { email, password, passwordConf, onSubmit, onChange } = props;

  const updateField = (key: keyof SignupForm) => (value: string) => {
    onChange(key, value);
  };

  const handleSignUp = (): void => {
    onSubmit({
      email: email.text,
      password: password.text,
      passwordConf: passwordConf.text
    });
  };

  const validForm = (): boolean => {
    return !(!!email.text && !!password.text && !!passwordConf.text);
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
              field={email}
              onChange={updateField('email')}
            />
            <PasswordField
              kind="login"
              field={password}
              onChange={updateField('password')}
            />
            <PasswordConfField
              kind="login"
              field={passwordConf}
              onChange={updateField('passwordConf')}
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
  const { email, password, passwordConf, loading } = state.authForms.signup;

  return {
    email,
    password,
    passwordConf,
    loading
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    | AuthFormAction<SignupPayload>
    | AccountConnectionAction
    | RegisterAccountAction
  >
): Handlers => ({
  onChange: (key: keyof SignupPayload, value: string) => {
    dispatch(changeAuthFieldText<SignupPayload>('signup', key, value));
  },
  onSubmit: (payload: SignupPayload) => {
    Axios.post(`${ROOT_API_URL}/signup`, payload)
      .then(
        success => {
          dispatch(registerAccountSuccess());
          window.localStorage.setItem(
            'jwt',
            (success.data as JsonWebToken).token
          );

          /**
           * POSTing to /signup will run through passport.js' login
           * middleware. So if there are no errors at this point we can log-in
           * the user without sending a separate request.
           */

          dispatch(
            connectAccount(payload.email, (success.data as JsonWebToken).token)
          );
          pushToAppHistory(Path.HOME);
        },
        errors => {
          /**
           * If express validator catches an error: 'data' will be a
           * SignupValidationError[]. If our moongoose User Schema catches an
           * error: 'data' will be a string.
           */

          const data: ExpressValidatorError[] | string = errors.response.data;
          if (typeof data === 'object') {
            dispatch(registerAccountFailure(data));
          }
        }
      )
      .catch(reason => {
        dispatch(registerAccountFailure());
      });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
