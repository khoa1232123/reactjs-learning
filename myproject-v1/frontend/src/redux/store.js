import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // options like actionSanitizer, stateSanitizer
    })
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

// const loadRefeshData = () => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// }

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };
