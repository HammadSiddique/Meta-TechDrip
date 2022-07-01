import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { productsReducer, selectedProductsReducer } from './products/products';

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

const store = configureStore({ reducer: rootReducer }, {}, applyMiddleware(thunk));

export default store;
