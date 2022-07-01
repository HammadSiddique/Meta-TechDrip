import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/products';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
  const productData = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch((err) => {
  //       console.log('Err: ', err);
  //     });
  //   dispatch(getProducts(response.data));
  // };

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div className="products-section">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
