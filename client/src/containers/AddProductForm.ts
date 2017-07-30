import AddCourseForm, {
  Handlers
} from '../components/Inventory/AddProductForm';
import * as actions from '../actions/addItem';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (state: RootState): Product => {
  return state.forms.addItem;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>): Handlers => {
  return {
    onChange: (key: keyof Product, value: string, ) => 
      dispatch(actions.changeFormText(key, value)),
    onSubmit: (payload: Product) => {
      dispatch(actions.submitProduct(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourseForm);