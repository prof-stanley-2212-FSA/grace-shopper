import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store';
import { Link } from 'react-router-dom';

const Products = ()=> {
  const { products } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
          products.map( product => {
            return (
              <li key={ product.id }>
                { product.name }
                <button onClick={ ()=> dispatch(addToCart(product))}>Add to Cart</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;
