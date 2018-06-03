import * as React from 'react';
import {
  Layout,
  EmptyState,
  Button,
  Card,
  ResourceList
} from '@shopify/polaris';
import { PublicUserInfo } from 'types';

const emptyImage = require('../empty-state.svg');

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
        <ResourceList
          items={this.props.userList}
          renderItem={(user: PublicUserInfo) => (
            <ResourceList.Item onClick={console.log} id={user.email}>
              <div>{user.email}</div>
            </ResourceList.Item>
          )}
        />
      </Layout.AnnotatedSection>
    );
  };

  readonly usersNotFoundMarkup = () => {
    return (
      <EmptyState
        image={emptyImage}
        heading="No users found."
        action={{ content: 'Reload', onAction: this.props.onLoad }}
      >
        <p>Reload this component.</p>
      </EmptyState>
    );
  };

  public render() {
    return this.props.userList.length > 0
      ? this.usersFoundMarkup()
      : this.usersNotFoundMarkup();
  }
}

export default UserList;
