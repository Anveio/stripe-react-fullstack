import * as React from 'react';
import {
  Card,
  FormLayout,
  DisplayText,
  TextField,
  ButtonGroup,
  Button
} from '@shopify/polaris';
import { RootState, Product } from 'types';
import { Dispatch, connect } from 'react-redux';
import {
  FormAction,
  changeFormText,
  submitForm,
  resetForm
} from 'actions/form';

export interface Handlers {
  readonly onChange: (key: keyof Product, value: string) => void;
  readonly onSubmit: (payload: Product) => void;
}

const AddProductForm = ({
  category,
  description,
  imageSrc,
  name,
  onChange,
  onSubmit,
  price
}: Product & Handlers) => {
  const createProduct = () => {
    onSubmit({
      category,
      description,
      imageSrc,
      name,
      price
    });
  };

  const updateField = (key: keyof Product) => (value: string) => {
    onChange(key, value);
  };

  const watchForEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13) {
      event.preventDefault();
      createProduct();
    }
  };

  return (
    <Card sectioned>
      <FormLayout>
        <DisplayText size="medium">Add a new Product.</DisplayText>
        <div onKeyPress={watchForEnter}>
          <TextField
            autoFocus
            label="Name"
            name="name"
            id="add-product-name"
            onChange={updateField('name')}
            value={name}
          />
          <TextField
            label="Category"
            name="category"
            id="add-product-category"
            onChange={updateField('category')}
            value={category}
          />
          <TextField
            type="number"
            name="price"
            id="add-product-price"
            prefix="$"
            min={0}
            max={9999}
            label="Price"
            onChange={updateField('price')}
            value={price.toString()}
          />
          <TextField
            label="Description"
            name="description"
            id="add-product-description"
            onChange={updateField('description')}
            value={description}
          />
          <TextField
            label="Image URL"
            name="image-url"
            id="add-Product-image-url"
            onChange={updateField('imageSrc')}
            value={imageSrc}
          />
        </div>
        <ButtonGroup>
          <Button primary submit icon="add" onClick={createProduct}>
            Add
          </Button>
        </ButtonGroup>
      </FormLayout>
    </Card>
  );
};

const mapState = (state: RootState): Product => ({ ...state.forms.addItem });

const mapDispatch = (dispatch: Dispatch<FormAction<Product>>): Handlers => ({
  onChange: (key: keyof Product, value: string) =>
    dispatch(changeFormText<Product>('addItem', key, value)),
  onSubmit: (payload: Product) => {
    dispatch(submitForm<Product>('addItem', payload));
    dispatch(resetForm('addItem'));
  }
});

export default connect(mapState, mapDispatch)(AddProductForm);
