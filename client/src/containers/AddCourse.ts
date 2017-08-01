import AddCourse, { Handlers } from '../components/Catalogue/AddCourse';
import * as actions from '../actions/form';
import { connect, Dispatch } from 'react-redux';

const mapState = (state: RootState): Course => {
  return { name: state.forms.addCourse.name };
};

const mapDispatch = (dispatch: Dispatch<actions.FormAction<Course>>): Handlers => ({
  onChange: (key: keyof Course, value: string) =>
    dispatch(actions.changeFormText<Course>('addCourse', key, value)),
  onSubmit: (payload: Course) => {
    dispatch(actions.submitForm<Course>('addCourse', payload));
    dispatch(actions.resetFormText('addCourse'));
  }
});

export default connect(mapState, mapDispatch)(AddCourse);
