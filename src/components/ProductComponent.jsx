import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  if (products.length === 0) {
    return (
      <h4>NO DATA FOUND</h4>
    );
  }
  const renderList = products.map((product) => {
    const {
      id, title, image, price, category,
    } = product;
    // console.log(product);
    return (
      <div className="product-item" key={id}>
        <Link to={`/product/${id}`}>

          <div className="item-card">
            <div className="item-image">
              <img src={image} alt={title} />
            </div>
            <div className="item-description">
              <h3 className="item-name">{title}</h3>
              <h4 className="item-price">
                $
                {price}
              </h4>
              <h5 className="item-category">{category}</h5>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
