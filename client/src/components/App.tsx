import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Page } from '@shopify/polaris';

import HeaderNav from './Navigation/PageHeader';
import Home from './Home';
import Catalogue from './Catalogue/Catalogue';
import SignupForm from '../containers/SignupForm';
import Notifications from '../containers/Notifications';

export default class App extends React.Component<{}, never> {
  render() {
    return (
      <Router>
        <main>
          <HeaderNav />
          <Page title="My Business">
            <Notifications />
            <Route exact path="/" component={Home} />
            <Route path="/catalogue" component={Catalogue} />
            <Route
              path="/signup"
              render={() => {
                return <SignupForm />;
              }}
            />
          </Page>
        </main>
      </Router>
    );
  }
}
