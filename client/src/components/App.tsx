import * as React from 'react';
import { Page, Layout } from '@shopify/polaris';
import { Route } from 'react-router-dom';

import Checkout from './Payment/Checkout';
import PageHeader from './Navigation/PageHeader';
import { connect, Dispatch } from 'react-redux';
import { UserState, RootState } from 'types';
import { Path } from 'constants/routes';
import { loginWithJwt } from 'api/login';
import AuthLayout from './Auth/AuthLayout';
import { loginSuccess, loginFailure, LoginAction } from 'actions/login';

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

const mapDispatch = (dispatch: Dispatch<LoginAction>): Handlers => ({
  onBoot: async (jwt: string) => {
    try {
      const response = await loginWithJwt(jwt);
      dispatch(loginSuccess(response.email, jwt));
    } catch (e) {
      dispatch(loginFailure({ message: 'Please login again.', name: 'token' }));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(App);
