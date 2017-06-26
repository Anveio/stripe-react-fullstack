import * as React from 'react';
import { Route } from 'react-router-dom';
import { Page } from '@shopify/polaris';

import HeaderNav from './Navigation/PageHeader';
import Home from './Home';
import SignupForm from '../containers/SignupForm';
import Notifications from '../containers/Notifications';

export default class App extends React.Component<{}, never> {
  render() {
    return (
      <main>
        <HeaderNav />
        <Page title="My Business">
          <Notifications />
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={() => {
              return <SignupForm />;
            }}
          />
        </Page>
      </main>
    );
  }
}
