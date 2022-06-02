import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginState } from '../service/userReducer';
import { auth } from '../firebase';

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef([]);
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handlegoToHome = () => {
    dispatch(loginState(false));
  };

  const handleChangeState = (e) => { 
    const signBtn = document.querySelector('.sign-btn');
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    if (regEmail.test(state.email) === false) { 
      signBtn.disabled = true;
    } else if (regEmail.test(state.email) === true) {
      signBtn.disabled = false;
    } 
  }

  const handleClickSubmit = (e) => { 
    e.preventDefault();
    if (state.email === '') {
      inputRef.current[0].focus();
      return;
    }
    if (state.password === '') {
      inputRef.current[0].focus();
      return;
    }

    auth.signInWithEmailAndPassword(state.email, state.password)
      .then(auth => { 
        dispatch(loginState(false));
        navigation('/')
      })
      .catch(err => alert(err.message))
  }; 

  const handleClickRegister = (e) => { 
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((auth) => {
        if (auth) { 
          dispatch(loginState(false));
          navigation('/');
        }
      })
      .catch((err) => alert(err.message));
  }

  return (
    <Container>
      <Link to="/" onClick={handlegoToHome}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
          className="login-logo"
        />
      </Link>
      <LoginContainer>
        <form id="sign-form">
          <fieldset>
            <legend className="sign-title">Sign-in</legend>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChangeState}
              ref={(el) => (inputRef.current[0] = el)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChangeState}
              ref={(el) => (inputRef.current[1] = el)}
            />
            <button type="submit" onClick={handleClickSubmit} className="sign-btn">
              Sign In
            </button>
          </fieldset>
        </form>
        <p>By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.</p>
      </LoginContainer>
      <p className="login-register-text">New to Amazon?</p>
      <button type="submit" onClick={handleClickRegister} className="login-register-btn">
        Create your to Amazon account
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  .login-logo {
    display: block;
    width: 100px;
    margin: 20px auto;
    object-fit: contain;
  }
  .login-register-text {
    position: relative;
    margin: 20px 0;
    text-align: center;
    color: #767676;
    font-size: 12px;
    &::before,
    &::after {
      position: absolute;
      width: 95px;
      content: '';
      height: 1px;
      bottom: 45%;
      background-color: #ddd;
    }
    &::before {
      left: -105px;
    }
    &::after {
      right: -105px;
    }
  }
  .login-register-btn {
    width: 300px;
    height: 30px;
    background: #e7e9ec;
    border: 1px solid;
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    font-size: 14px;
  }
`;

const LoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 4px;
  #sign-form {
    padding: 15px 20px;
    .sign-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 16px;
    }
    label + input {
      margin-right: 20px;
      width: 100%;
      padding: 5px;
      box-sizing: border-box;
    }
    #email {
      margin-bottom: 12px;
    }
    .sign-btn {
      width: 100%;
      height: 30px;
      margin-top: 16px;
      font-size: 14px;
      border-radius: 2px;
      background: #f0c14b;
      border: 1px solid;
      border-color: #a88734 #9c7e31 #846a29;
    }
  }
  #sign-form + p {
    padding: 0 20px 20px;
    font-size: 12px;
    box-sizing: border-box;
  }
`;

export default Login;