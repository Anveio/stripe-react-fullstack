import * as React from 'react';
import { renderWithProvider, leftClick } from './test-utils';
import PageHeader from 'components/Navigation/PageHeader';
import { Simulate } from 'react-dom/test-utils';

test('Clicking the login button changes current href to /auth', () => {
  const { getByText } = renderWithProvider(<PageHeader />);
  const LoginLink = getByText('login / signup');

  expect(LoginLink).toBeDefined();

  Simulate.click(LoginLink, leftClick);

  // pathname should === '/auth'
  expect(window.location.pathname).toMatch(/^\/auth/);
});
