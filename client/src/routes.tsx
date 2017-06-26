import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import SignupForm from './containers/SignupForm';

export default class Routes extends React.Component<{}, never> {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route
          path="/signup"
          render={() => {
            return <SignupForm />;
          }}
        />
      </Router>
    );
  }
}
