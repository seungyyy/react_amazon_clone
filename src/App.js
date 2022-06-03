import React, { useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase';
import { setUser } from './service/userReducer';
import Payment from './pages/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51L6FL1BuvVzmK9LppzUDCOPgKTqseynv2ODAOh1Z9qbFmvtQ7ukvt4QlFi2RcVw6Tr9IeJWyh6lhJnivUHOZU4Xn00Po1Dt6JF'
);

function App() {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.userData.login)

  useEffect(() => { 
    auth.onAuthStateChanged(userAuth => { 
      if (userAuth) {
        dispatch(
          setUser({
            email: userAuth._delegate.email,
            uid: userAuth._delegate.uid,
          })
        );
      } else { 
        dispatch(setUser(null));
      }
    })
  }, [])

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
      {loginState === false && <Header />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
            <Route path="/payment" element={
              <Elements stripe={promise}>
              <Payment />
              </Elements>
            }>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
