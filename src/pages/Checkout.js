import React from 'react';
import styled from 'styled-components';
import CheckoutProduct from '../components/CheckoutProduct';
import SubTotal from '../components/SubTotal';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const user = useSelector(state => state.userData.user)

  return (
    <Container>
      <div className="checkout-left">
        <h3>Hello, {user ? user.email : 'Guest'}</h3>
        <h2>Shoppping Cart</h2>
        <CheckoutProduct />
      </div>
      <SubTotal />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  height: max-content;
  padding: 20px;
  box-sizing: border-box;
  .checkout-left {
    flex-grow: 3;
    padding: 10px 15px 30px;
    background-color: #fff;
    h3 {
      margin-right: 10px;
      padding: 0 10px;
      font-size: 24px;
      font-weight: bold;
    }
    h2 {
      padding: 10px;
      margin-right: 10px;
      font-size: 32px;
      font-weight: bold;
      border-bottom: 1px solid lightgrey;
    }
  }
  .checkout-right {
    flex-grow: 1;
  }
`;

export default Checkout