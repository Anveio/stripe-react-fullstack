import * as React from 'react';
import { Layout, AccountConnection, Link } from '@shopify/polaris';

export interface State {
  first: string;
  last: string;
  email: string;
  checkboxes: Array<{}>;
  connected: boolean;
}

export default class Account extends React.PureComponent<{}, State> {
  state = {
    first: '',
    last: '',
    email: '',
    checkboxes: [],
    connected: false,
  };

  toggleConnection = (): void => {
    this.setState(({connected}) => ({connected: !connected}));
  }

  readonly connectAccountMarkup = (): JSX.Element => {
    return (
      <Layout.AnnotatedSection
        title="Account"
        description="Connect your account to Pluralsight Administration."
      >
        <AccountConnection
          action={{
            content: 'Connect',
            onAction: this.toggleConnection.bind(this, this.state),
          }}
          details="No account connected"
          termsOfService={(
            <p>By clicking Connect, you are accepting Pluralsight Administration's
              <Link url="https://polaris.shopify.com"> Terms and Conditions</Link>
              , including a commission rate of 15% on sales.
            </p>
          )}
        />
      </Layout.AnnotatedSection>
    );
  }

  readonly disconnectAccountMarkup = (): JSX.Element => {
    return (
      <Layout.AnnotatedSection
          title="Account"
          description="Disconnect your account from your Shopify store."
        >
        <AccountConnection
          connected
          action={{
            content: 'Disconnect',
            onAction: this.toggleConnection.bind(this, this.state),
          }}
          accountName="Tom Ford"
          title={<Link url="http://google.com">Tom Ford</Link>}
          details="Account id: d587647ae4"
        />
      </Layout.AnnotatedSection>
    );
  }

  render() {
    return (
      this.state.connected
      ? this.disconnectAccountMarkup()
      : this.connectAccountMarkup()
    );
  }
}