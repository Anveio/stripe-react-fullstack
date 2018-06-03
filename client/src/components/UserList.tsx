import * as React from 'react';
import {
  Layout,
  EmptyState,
  Button,
  Card,
  ResourceList
} from '@shopify/polaris';

import Axios from 'axios';
import { Dispatch, connect } from 'react-redux';
import {
  UserListAction,
  getUserListSuccess,
  getUserListFailure
} from 'actions/users';
import { PublicUserInfo, RootState } from 'types';
import { ROOT_API_URL } from '../constants';
const emptySvg = require('./empty-state.svg');

interface Props {
  userList: PublicUserInfo[];
}

interface Handlers {
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
              {user.email}
            </ResourceList.Item>
          )}
        />
      </Layout.AnnotatedSection>
    );
  };

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
  };

  public render() {
    return this.props.userList.length > 0
      ? this.usersFoundMarkup()
      : this.usersNotFoundMarkup();
  }
}

const mapStateToProps = (state: RootState): Props => {
  return {
    userList: state.users.list
  };
};

const mapDispatchToProps = (dispatch: Dispatch<UserListAction>): Handlers => ({
  onLoad: () => {
    Axios.get(`${ROOT_API_URL}/users`, {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('jwt')}`
      }
    })
      .then(
        response => {
          let users: PublicUserInfo[] = response.data;
          dispatch(getUserListSuccess(users));
        },
        error => {
          dispatch(getUserListFailure());
        }
      )
      .catch(reason => {
        console.log(reason); // tslint:disable-line:no-console
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
