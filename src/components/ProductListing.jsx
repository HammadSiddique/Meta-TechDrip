import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/products';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
  const productData = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

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
