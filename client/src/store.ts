import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './rootReducer';
import { devtools } from 'utils/config';
import storage from 'redux-persist/lib/storage';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage
  },
  rootReducer
);

const configureStore = () => {
  const store = createStore(persistedReducer, devtools);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
