import React, { useEffect, useRef } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Products from './Products';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { auth, cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const prevAuth = useRef({}); 

  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchProducts());
  }, []);

  useEffect(()=> {
    if(!prevAuth.current.id && auth.id){
      console.log('logged in');
      dispatch(fetchCart());
    }
    if(prevAuth.current.id && !auth.id){
      console.log('logged out');
    }
  }, [auth]);

  useEffect(()=> {
    prevAuth.current = auth;
  });

  const count = cart.lineItems.reduce((acc, lineItem)=> {
    return acc + lineItem.quantity;
  }, 0)
  return (
    <div>
      <h1>Acme Shopping</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Cart ({ count })</Link>
              <Link to='/products'>Products</Link>
            </nav>
            <Routes>
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/products' element={ <Products /> } />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
