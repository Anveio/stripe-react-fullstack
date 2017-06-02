import AddCourse from '../components/Catalogue/AddCourse';
import * as actions from '../actions/input';
import { RootState } from '../types/states';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (state: RootState) => {
  return {
    text: state.form.text
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>) => {
  return {
    onTextInput: () => dispatch(actions.addTextToForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);