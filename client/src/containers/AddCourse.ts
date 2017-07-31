import AddCourse, { Handlers } from '../components/Catalogue/AddCourse';
import * as actions from '../actions/form';
import { connect, Dispatch } from 'react-redux';

const mapState = (state: RootState): Course => {
  return { name: state.forms.addCourse.name };
};

const mapDispatch = (
  dispatch: Dispatch<actions.FormAction<Course>>
): Handlers => {
  return {
    onChange: (key: keyof Course, value: string) =>
      dispatch(actions.changeFormText<Course>(key, value)),
    onSubmit: (payload: Course) => {
      dispatch(actions.submitForm<Course>(payload));
      dispatch(actions.resetFormText<Course>('name'));
    }
  };
};

export default connect(mapState, mapDispatch)(AddCourse);
