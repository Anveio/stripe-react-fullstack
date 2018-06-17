import * as React from 'react';
import App from 'components/App';
import { renderWithProvider } from './test-utils';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

test('Application renders without crashing', () => {
  const renderResult = renderWithProvider(<App />);
  expect(renderResult).toBeDefined();
});
