import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Layout } from '@shopify/polaris';
import { RootState } from 'types';

interface Props {
  readonly loggedIn: boolean;
  readonly email: string | null;
}

const Introduction: React.SFC<Props> = ({ loggedIn, email }) => {
  return loggedIn && email ? (
    <Layout.Section>
      <Card sectioned>You're logged in with the email {email}</Card>
    </Layout.Section>
  ) : (
    <Layout.Section>
      <Card sectioned>
        Welcome to the Stripe React-Redux starter kit. Sign up to get started.
      </Card>
    </Layout.Section>
  );
};

const mapState = (state: RootState): Props => ({
  loggedIn: state.currentUser.loggedIn,
  email: state.currentUser.email
});

export default connect(mapState)(Introduction);
