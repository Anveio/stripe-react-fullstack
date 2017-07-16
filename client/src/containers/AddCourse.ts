import AddCourse, { Props, Handlers } from '../components/Catalogue/AddCourse';
import * as actions from '../actions/form';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (state: RootState): Props => {
  return { text: state.forms.addCourse.name.text };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>): Handlers => {
  return {
    onTextInput: (value: string) =>
      dispatch(actions.changeFormText(value, 'name')),
    onAddCourse: (payload: Course) => {
      dispatch(actions.submitCourse(payload));
      dispatch(actions.resetFormText('name'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
