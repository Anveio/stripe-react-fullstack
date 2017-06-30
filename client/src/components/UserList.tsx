import * as React from 'react';
import { Layout, Card } from '@shopify/polaris';

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
        {this.props.userList.map(user => {
          return <Card sectioned title={user.email} />;
        })}
      </Layout.AnnotatedSection>
    );
  }; // tslint:disable-line:semicolon

  public render() {
    return this.props.userList ? this.usersFoundMarkup() : <div />;
  }
}

export default UserList;
