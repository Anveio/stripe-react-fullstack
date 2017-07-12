import * as React from 'react';
import { Layout, EmptyState, Button, Card } from '@shopify/polaris';

import emptySvg from './empty-state.svg';

export interface Props {
  userList: PublicUserInfo[];
}

export interface Handlers {
  onLoad(): void;
}

class UserList extends React.PureComponent<Props & Handlers, never> {
  constructor(props: Props & Handlers) {
    super(props);
  }

  componentWillMount() {
    if (this.props.userList.length === 0) {
      this.props.onLoad();
    }
  }

  readonly usersFoundMarkup = () => {
    return (
      <Layout.AnnotatedSection
        title="Users"
        description="These are the emails of users that have registered."
      >
        <Card sectioned>
          <Button primary onClick={this.props.onLoad}>
            Reload Users.
          </Button>
        </Card>
        {this.props.userList.map((user, i) => {
          return <Card sectioned title={user.email} key={i} />;
        })}
      </Layout.AnnotatedSection>
    );
  }; // tslint:disable-line:semicolon

  readonly usersNotFoundMarkup = () => {
    return (
      <EmptyState
        image={emptySvg}
        heading="No users found."
        action={{ content: 'Reload', onAction: this.props.onLoad }}
      >
        <p>Reload this component.</p>
      </EmptyState>
    );
  }; // tslint:disable-line:semicolon

  public render() {
    return this.props.userList.length > 0
      ? this.usersFoundMarkup()
      : this.usersNotFoundMarkup();
  }
}

export default UserList;
