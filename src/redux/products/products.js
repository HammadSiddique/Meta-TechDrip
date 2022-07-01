import axios from 'axios';

const GET_PRODUCTS = 'Kick-Drip/products/GET_PRODUCTS';
const SELECTED_PRODUCTS = 'Kick-Drip/products/SELECTED_PRODUCTS';
const REMOVE_SELECTED_PRODUCTS = 'Kick-Drip/products/REMOVE_SELECTED_PRODUCTS';

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const SelectedProduct = (product) => ({
  type: SELECTED_PRODUCTS,
  payload: product,
});

export const removeSelectedProduct = () => ({
  type: REMOVE_SELECTED_PRODUCTS,
});

const intialState = {
  products: [],
};

export const fetchProducts = () => async (dispatch) => {
  const response = await axios
    .get('https://fakestoreapi.com/products');
  dispatch(getProducts(response.data));
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCTS:
      return { ...state, ...action.payload };
    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
