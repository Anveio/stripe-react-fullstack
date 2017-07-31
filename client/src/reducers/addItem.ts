import { FormAction } from '../actions/form';
import { UPDATE_FIELD_TEXT, RESET_TEXT_FIELD } from '../constants';

const initialState: Product = {
  category: '',
  description: '',
  imageSrc: '',
  name: '',
  price: 0
};

export default (state = initialState, action: FormAction<Product>): Product => {
  let partialState: Partial<Product> | undefined;

  switch (action.type) {
    case UPDATE_FIELD_TEXT:
      partialState = {
        [action.key]: action.value
      };
      break;
    case RESET_TEXT_FIELD:
      partialState = {
        [action.key]: ''
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};
