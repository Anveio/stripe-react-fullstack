import AddCourse from '../components/Catalogue/AddCourse';
import * as actions from '../actions/input';
import { RootState } from '../types/states';
import { connect, Dispatch } from 'react-redux';
import { Course } from '../types/schema';

export const mapStateToProps = (state: RootState) => {
  return {
    text: state.form.text
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>) => {
  return {
    onTextInput: (value: string) => dispatch(actions.changeFormText(value)),
    onAddCourse: (course: Course) => {
      dispatch(actions.addCourse(course)); 
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);