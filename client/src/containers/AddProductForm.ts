import AddCourseForm, {
  Handlers
} from '../components/Inventory/AddProductForm';
import * as actions from '../actions/addItem';
import { connect, Dispatch } from 'react-redux';

const mapState = (state: RootState): Product => {
  return state.forms.addItem;
};

const mapDispatch = (
  dispatch: Dispatch<actions.FormAction<Product>>
): Handlers => {
  return {
    onChange: (key: keyof Product, value: string) =>
      dispatch(actions.changeFormText<Product>(key, value)),
    onSubmit: (payload: Product) => {
      dispatch(actions.submitForm<Product>(payload));
    }
  };
};

export default connect(mapState, mapDispatch)(AddCourseForm);
