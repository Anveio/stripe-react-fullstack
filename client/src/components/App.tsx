import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';
import { Route } from 'react-router-dom';

import Checkout from './Payment/Checkout';
import PageHeader from './Navigation/PageHeader';
import { connect, Dispatch } from 'react-redux';
import { UserState, RootState } from 'types';
import { AccountConnectionAction, connectAccount } from 'actions/connection';
import { Path } from 'constants/routes';
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
    if (this.props.currentUser.token && !this.props.currentUser.loggedIn) {
      this.props.onBoot(this.props.currentUser.token);
    }
  }

  render() {
    return (
      <main>
        <PageHeader />
        <Page title="Dashboard">
          <Layout>
            <Route path={Path.AUTH} component={AuthLayout} />
            <Route
              path={Path.CHECKOUT}
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
  dispatch: Dispatch<AccountConnectionAction>
): Handlers => ({
  onBoot: async (jwt: string) => {
    const response = await loginWithJwt(jwt);
    if (response.email) {
      dispatch(connectAccount(response.email, jwt));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(App);
