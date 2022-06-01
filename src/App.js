import React, { useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase';
import { setUser } from './servives/userReducer';


function App() {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.userData.login)

  useEffect(() => { 
    auth.onAuthStateChanged(userAuth => { 
      //console.log('user', userAuth._delegate.email);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
