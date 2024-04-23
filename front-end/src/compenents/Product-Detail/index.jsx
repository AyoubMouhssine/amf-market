import React from 'react';
import './product-detail.css';
import Header from '../Header';
import Menu from '../Menu/index'


const ProductDetail = () => {
  return (
    <>
     
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src="https://placehold.it/400x400" alt="Product" />
        </div>
        <div className="product-detail-info">
          <div className="product-detail-title">Cotton Men Black Plain T Shirt</div>
          <div className="product-detail-price">
            <span className="price">149 dh</span>
          </div>
          <div className="product-detail-status">In Stock</div>
          <div className="product-detail-variants">
            <span>Variants:</span>
            <ul className='variants-option'>
              <input type="radio" id="S" name="variant" value="S" checked/>
              <label for="S">S</label><br />
              <input type="radio" id="l" name="variant" value="l" />
              <label for="l">L</label><br />
              <input type="radio" id="xl" name="variant" value="xl" />
              <label for="xl">XL</label>
            </ul>
          </div>
          <div className="product-detail-color">
            <span>Color:</span>
            <ul className='color-option'>
              <input type="radio" id="black" name="color" value="black" checked />
              <label for="black">black</label><br />
              <input type="radio" id="pink" name="color" value="pink" />
              <label for="l">pink</label><br />
              <input type="radio" id="maroon" name="color" value="maroon" />
              <label for="maroon">maroon</label>
            </ul>
          </div>
          <div clasName="product-detail-quantity">
            <button>Order Now</button>
            <span>-</span> 1 <span>+</span> 
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ProductDetail;
