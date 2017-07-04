import * as React from 'react';
import { Layout, EmptyState, Card } from '@shopify/polaris';

const emptySvg = require('./empty-state.svg');

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
    this.props.onLoad();
  }

  readonly usersFoundMarkup = () => {
    return (
      <Layout.AnnotatedSection title="Users">
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
        imageContained
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
