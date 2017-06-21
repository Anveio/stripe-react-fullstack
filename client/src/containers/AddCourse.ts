import AddCourse from '../components/Catalogue/AddCourse';
import * as actions from '../actions/form';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (state: RootState) => ({ text: state.form.text });

export const mapDispatchToProps = (dispatch: Dispatch<actions.FormSubmit>) => {
  return {
    onTextInput: (value: string) => 
      dispatch(actions.changeFormText(value, 'course')),
    onAddCourse: (payload: Course) => {
      dispatch(actions.submitCourse(payload));
      dispatch(actions.resetFormText()); 
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);