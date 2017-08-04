import AddCourseForm, { Handlers } from '../components/Inventory/AddProductForm';
import * as actions from '../actions/form';
import { connect, Dispatch } from 'react-redux';

const mapState = (state: RootState): Product => {
  const { category, description, imageSrc, name, price } = state.forms.addItem;

  return { category, description, imageSrc, name, price };
};

const mapDispatch = (dispatch: Dispatch<actions.FormAction<Product>>): Handlers => ({
  onChange: (key: keyof Product, value: string) =>
    dispatch(actions.changeFormText<Product>('addItem', key, value)),
  onSubmit: (payload: Product) => {
    dispatch(actions.submitForm<Product>('addItem', payload));
    dispatch(actions.resetForm('addItem'));
  }
});

export default connect(mapState, mapDispatch)(AddCourseForm);
