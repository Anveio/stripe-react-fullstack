import * as React from 'react';
import { renderIntoDocument } from 'react-testing-library';
import { renderWithProvider, createPreloadedStore } from './test-utils';
import LoginForm from 'components/Auth/LoginForm';
import { changeAuthFieldText } from 'actions/formAuth';
import { LoginPayload } from 'types';

const genericEmail = 'foobar@foobar.com';
const genericPassword = 'foobar';

test('Dispatching actions to update email input correctly changes input value', () => {
  const { store, getByLabelText } = renderWithProvider(<LoginForm />);
  const EmailInputNode = getByLabelText(/email/i) as HTMLInputElement;

  store.dispatch(
    changeAuthFieldText<LoginPayload>('login', 'email', genericEmail)
  );

  expect(store.getState().authForms.login.email).toBe(genericEmail);
  expect(EmailInputNode.value).toBe(genericEmail);
});

test('Dispatching actions to update password input correctly changes input value', () => {
  const { store, getByLabelText } = renderWithProvider(<LoginForm />);
  const PasswordInputNode = getByLabelText(/password/i) as HTMLInputElement;

  store.dispatch(
    changeAuthFieldText<LoginPayload>('login', 'password', genericPassword)
  );

  expect(store.getState().authForms.login.password).toBe(genericPassword);
  expect(PasswordInputNode.value).toBe(genericPassword);
});

test('Submitting login form', () => {
  const state = createPreloadedStore().getState();

  const { getByLabelText } = renderIntoDocument(
    renderWithProvider(<LoginForm />, {
      authForms: {
        ...state.authForms,
        login: {
          ...state.authForms.login,
          password: genericPassword
        }
      }
    }).wrappedUi
  );
  const PasswordInputNode = getByLabelText(/password/i) as HTMLInputElement;

  expect(PasswordInputNode.value).toBe(genericPassword);
});
