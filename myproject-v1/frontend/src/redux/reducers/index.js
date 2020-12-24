import categoryReducers from './categoryReducers';
import productReducers from './productReducers';
import authReducers from './authReducers';
import cartReducers from './cartReducers';
// import userReducers from './userReducers';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  category: categoryReducers,
  product: productReducers,
  auth: authReducers,
  cart: cartReducers,
  // user: userReducers,
});

export default persistReducer(persistConfig, rootReducer);
