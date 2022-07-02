import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail, removeSelectedProduct } from '../redux/products/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProductDetail(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <div className="product-container">
      {Object.keys(product).length === 0 ? (
        <div className="loading-container"><div className="custom-loader" /></div>
      ) : (
        <div className="product-detail-container">
          <div className="details-img">
            <img className="item-image" src={image} alt={title} />
          </div>
          <div className="details-content">
            <h2 className="item-name">{title}</h2>
            <h3>
              <p className="item-price">
                $
                {price}
              </p>
            </h3>
            <h4 className="item-category">{category}</h4>
            <p className="item-description">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
