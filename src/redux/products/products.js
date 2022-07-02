import axios from 'axios';

const GET_PRODUCTS = 'Meta-TechDrip/products/GET_PRODUCTS';
const SELECTED_PRODUCTS = 'Meta-TechDrip/products/SELECTED_PRODUCTS';
const REMOVE_SELECTED_PRODUCTS = 'Meta-TechDrip/products/REMOVE_SELECTED_PRODUCTS';
const FILTER = 'Meta-TechDrip/products/FILTER';

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

export const fetchProductDetail = (id) => async (dispatch) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`);
  dispatch(SelectedProduct(response.data));
};

export const productFilter = (search) => ({ type: FILTER, payload: search });

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTER: {
      const result = state.products.filter((product) => {
        const title = product.title.toLowerCase();
        return title.includes(action.payload.toLowerCase());
      });
      return { products: result };
    }
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
