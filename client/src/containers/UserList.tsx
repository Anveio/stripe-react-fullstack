import UserList, { Props, Handlers } from '../components/UserList';
import * as actions from '../actions/users';
import { connect, Dispatch } from 'react-redux';
import axios from 'axios';

import { rootUrl } from '../constants';

const mapStateToProps = (state: RootState): Props => {
  return {
    userList: state.users.list
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.UserListAction>): Handlers => {
  return {
    onLoad: () => {
      axios
        .post(`${rootUrl()}/api/users`)
        .then(
          response => {
            dispatch(actions.getUserListSuccess(response.data));
          },
          error => {
            dispatch(actions.getUserListFailure());
          }
        )
        .catch(reason => {
          throw new Error(reason);
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
