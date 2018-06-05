import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';
import { Route } from 'react-router-dom';

import Checkout from './Payment/Checkout';
import PageHeader from './Navigation/PageHeader';
import { connect, Dispatch } from 'react-redux';
import { UserState, RootState } from 'types';
import { AccountConnectionAction, connectAccount } from 'actions/connection';
import BannerLayer from './BannerLayer';
import { NotificationAction, displayNotification } from 'actions/notifications';
import { Route as AppRoute } from 'constants/routes';
import { loginWithJwt } from 'api/login';
import AuthLayout from './Auth/AuthLayout';

interface Props {
  readonly currentUser: UserState;
}

interface Handlers {
  readonly onBoot: (jwt: string) => void;
}

class App extends React.PureComponent<Props & Handlers, never> {
  componentDidMount() {
    if (this.props.currentUser.token) {
      this.props.onBoot(this.props.currentUser.token); // tslint:disable-next-line:no-console
    }
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
            <Route path="/auth" component={AuthLayout} />
            <Route
              path={AppRoute.CHECKOUT}
              component={() => {
                return (
                  <Checkout
                    name={'Example Item'}
                    description={'Example description'}
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
  onBoot: async (jwt: string) => {
    const response = await loginWithJwt(jwt);
    if (response.email) {
      dispatch(connectAccount({ email: response.email, token: jwt }));
      displayNotification({
        status: 'success',
        title: 'You\'ve been logged in.',
        message: 'hi'
      });
    }
    displayNotification({
      status: 'warning',
      title: 'Your previous session may have expired.',
      message: 'Please log in again.'
    });
  }
});

export default connect(
  mapState,
  mapDispatch
)(App);
