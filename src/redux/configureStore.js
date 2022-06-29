import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/products';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
