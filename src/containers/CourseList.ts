import CourseList from '../components/Catalogue/CourseList';
import * as actions from '../actions/input';
import { RootState } from '../types/states';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (rootState: RootState) => {
  return {
    list: rootState.courses.list,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>) => {
  return {
    // onNewCourse: () => dispatch(actions.addCourse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);