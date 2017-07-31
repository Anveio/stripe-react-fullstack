import AddCourse, { Handlers } from '../components/Catalogue/AddCourse';
import * as actions from '../actions/form';
import { connect, Dispatch } from 'react-redux';

const mapState = (state: RootState): Course => {
  return { name: state.forms.addCourse.name };
};

const mapDispatch = (dispatch: Dispatch<actions.FormAction<Course>>): Handlers => {
  return {
    onChange: (key: keyof Course, value: string) =>
      dispatch(actions.changeFormText<Course>('addCourse', key, value)),
    onSubmit: (payload: Course) => {
      dispatch(actions.submitForm<Course>('addCourse', payload));
      dispatch(actions.resetFormText<Course>('addCourse', 'name'));
    }
  };
};

export default connect(mapState, mapDispatch)(AddCourse);
