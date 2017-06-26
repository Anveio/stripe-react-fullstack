import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageHeader from './Navigation/PageHeader';
import Home from './Home';
import Catalogue from './Catalogue/Catalogue';
import SignupForm from '../containers/SignupForm';
import Notifications from '../containers/Notifications';

export default class App extends React.Component<{}, never> {
  render() {
    return (
      <Router>
        <main>
          <PageHeader />
          <Notifications />
          <Route exact path="/" component={Home} />
          <Route path="/catalogue" component={Catalogue} />
          <Route
            path="/signup"
            render={() => {
              return <SignupForm />;
            }}
          />
        </main>
      </Router>
    );
  }
}
