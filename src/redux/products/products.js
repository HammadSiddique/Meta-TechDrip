export const PRODUCTS = 'Kick-Drip/products/PRODUCTS';
export const SELECTED_PRODUCTS = 'Kick-Drip/products/SELECTED_PRODUCTS';
// const REMOVE_SELECTED_PRODUCTS = 'Kick-Drip/products/REMOVE_SELECTED_PRODUCTS';

export const getProducts = (products) => ({
  type: PRODUCTS,
  payload: products,
});

export const selectedProducts = (product) => ({
  type: SELECTED_PRODUCTS,
  payload: product,
});

const initialState = {
  product: [{
    id: 1,
    item: 'watch',
    price: '39.99$',
  }],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return state;
    default:
      return state;
  }
};
