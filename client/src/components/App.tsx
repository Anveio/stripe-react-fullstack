import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';
import { Route } from 'react-router-dom';

import Checkout from './Payment/Checkout';
import PageHeader from './Navigation/PageHeader';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';
import { UserState, RootState, JwtConnectionSuccess } from 'types';
import { AccountConnectionAction, connectAccount } from 'actions/connection';
import { ROOT_API_URL } from '../constants';
import BannerLayer from './BannerLayer';
import SignupForm from './Auth/SignupForm';
import LoginForm from './Auth/LoginForm';
import { NotificationAction, pushNotification } from 'actions/notifications';
import { Routes } from 'constants/routes';

interface Props {
  readonly currentUser: UserState;
}

interface Handlers {
  readonly onBoot: () => void;
}

class App extends React.PureComponent<Props & Handlers, never> {
  componentWillMount() {
    localStorage.getItem('jwt')
      ? this.props.onBoot() // tslint:disable-next-line:no-console
      : console.log('No jwt in localstorage. Skipping automatic log in.');
  }

  render() {
    return (
      <main>
        <PageHeader />
        <Page title="Dashboard">
          <Layout>
            <Layout.Section>
              <BannerLayer />
            </Layout.Section>
            <Route path="/signup" component={() => <SignupForm />} />
            <Route path="/login" component={() => <LoginForm />} />
            <Route
              path={Routes.CHECKOUT}
              component={() => {
                return (
                  <Checkout
                    name={'The Road to learn React'}
                    description={'Only the Book'}
                    amount={100}
                  />
                );
              }}
            />
          </Layout>
        </Page>
      </main>
    );
  }
}

const mapState = (state: RootState): Props => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatch = (
  dispatch: Dispatch<AccountConnectionAction | NotificationAction>
): Handlers => ({
  onBoot: () => {
    axios
      .post(`${ROOT_API_URL}/connect/jwt`, {
        token: window.localStorage.getItem('jwt')
      })
      .then(
        response => {
          dispatch(
            connectAccount({
              email: (response.data as JwtConnectionSuccess).email,
              token: window.localStorage.getItem('jwt')
            })
          );
          // tslint:disable-next-line:no-console
          console.log('Authentication successful');
        },
        reject => {
          dispatch(
            connectAccount({
              email: '',
              token: ''
            })
          );
          dispatch(
            pushNotification({
              status: 'warning',
              title: 'Your previous session may have expired.',
              message: 'Please log in again.'
            })
          );
        }
      )
      .catch(e =>
        dispatch(
          pushNotification({
            status: 'critical',
            title: 'warning',
            message: 'Our server couldn\'t process your request.'
          })
        )
      );
  }
});

export default connect(
  mapState,
  mapDispatch
)(App);
