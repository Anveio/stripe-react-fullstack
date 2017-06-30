import * as React from 'react';
import { Route } from 'react-router-dom';
import { Page } from '@shopify/polaris';

import PageHeader from '../containers/PageHeader';
import Home from './Home';
import SignupForm from '../containers/SignupForm';
import LoginForm from '../containers/LoginForm';
import Notifications from '../containers/Notifications';
import UserList from '../containers/UserList';

export default class App extends React.Component<{}, never> {
  render() {
    return (
      <main>
        <PageHeader />
        <Page title="Dashboard">
          <Notifications />
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={() => {
              return <SignupForm />;
            }}
          />
          <Route
            path="/login"
            render={() => {
              return <LoginForm />;
            }}
          />
          <Route
            path="/users"
            render={() => {
              return <UserList />;
            }}
          />
        </Page>
      </main>
    );
  }
}
