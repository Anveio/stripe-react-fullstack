import AddCourse from '../components/Catalogue/AddCourse';
import * as courseActions from '../actions/course';
import * as formActions from '../actions/input';
import { RootState } from '../types/states';
import { connect, Dispatch } from 'react-redux';
import { Course } from '../types/schema';

export const mapStateToProps = (state: RootState) => {
  return {
    text: state.form.text
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<courseActions.AddCourse>) => {
  return {
    onTextInput: (value: string) => dispatch(formActions.changeFormText(value)),
    onAddCourse: (course: Course) => {
      dispatch(courseActions.addCourse(course));
      dispatch(formActions.resetFormText()); 
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);