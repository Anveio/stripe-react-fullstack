import * as React from 'react';
import { Page } from '@shopify/polaris';
import { Route } from 'react-router-dom';

import LoginForm from '../containers/LoginForm';
import Notifications from '../containers/Notifications';
import PageHeader from '../containers/PageHeader';
import SignupForm from '../containers/SignupForm';
import UserList from '../containers/UserList';
import Home from './Home';

export interface Props {
  readonly currentUser: UserState;
}

export interface Handlers {
  readonly onBoot: () => void;
}

export default class App extends React.Component<Props & Handlers, never> {
  componentWillMount() {
    if (localStorage.getItem('jwt')) {
      this.props.onBoot();
    } else {
      // tslint:disable-next-line:no-console
      console.log('No jwt in localstorage. Skipping automatic log in.');
    }
  }

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
