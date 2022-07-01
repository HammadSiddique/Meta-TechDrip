import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer, selectedProductsReducer } from './products/products';

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
