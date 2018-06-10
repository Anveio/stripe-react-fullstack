import * as React from 'react';
import { mockLocalStorage } from './mock/localStorage';
import App from 'components/App';
import { renderWithProvider } from './test-utils';

mockLocalStorage();

test('Application renders without crashing', () => {
  const renderResult = renderWithProvider(<App />);

  expect(renderResult).toBeDefined();
});
