import React from 'react';
import styled from 'styled-components';
import ShoppingBasKet from '../components/ShoppingBasKet';
import SubTotal from '../components/SubTotal';

const Checkout = () => {
  return (
    <Container>
      <div className="checkout-left">
        <h2>Shoppping Cart</h2>
        <ShoppingBasKet />
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
    background-color: #fff;
    h2 {
      margin-right: 10px;
      padding: 10px;
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