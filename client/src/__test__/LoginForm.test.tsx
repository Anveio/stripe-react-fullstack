import * as React from 'react';
import { renderWithProvider } from './test-utils';
import LoginForm from 'components/Auth/LoginForm';
import { changeAuthFieldText } from 'actions/formAuth';
import { LoginPayload } from 'types';

const genericEmail = 'foobar@foobar.com';

test('Dispatching actions to update login input correctly changes input value', () => {
  const { store, getByLabelText } = renderWithProvider(<LoginForm />);
  const LoginInputNode = getByLabelText(/email/i) as HTMLInputElement;

  store.dispatch(
    changeAuthFieldText<LoginPayload>('login', 'email', genericEmail)
  );

  expect(store.getState().authForms.login.email.text).toBe(genericEmail);
  expect(LoginInputNode.value).toBe(genericEmail);
});
