import axios from 'axios';
const products = (state = [], action)=> {
  if(action.type === 'SET_PRODUCTS'){
    return action.products;
  }
  return state;
};


export const fetchProducts = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/products');
    dispatch({ type: 'SET_PRODUCTS', products: response.data });
  };
};


export default products;
