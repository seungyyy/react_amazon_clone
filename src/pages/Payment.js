import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = () => {
  const userData = useSelector(state => state.userData.user)
  const basketData = useSelector(state => state.basketData.basket);

  return (
    <Container>
      <Link to="/checkout">
        <p className="checkout-link">
          Checkout(
          {basketData?.length} items)
        </p>
      </Link>
      <ul className="payment-list">
        <li className="payment-li">
          <h3 className="payment-title">Delivery Address</h3>
          <div className="payment-address">
            <p>{userData?.email}</p>
            <p>123 react Lane</p>
            <p>Seoul</p>
          </div>
        </li>
        <li className="payment-li">
          <h3 className="payment-title">Review Items and Delivery</h3>
          <div className="payment-items">
            <CheckoutProduct />
          </div>
        </li>
        <li className="payment-li">
          <h3 className="payment-title">Peyment Method</h3>
          <div className="payment-detail"></div>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.section`
  background-color: #fff;
  .checkout-link {
    padding: 10px;
    font-weight: 600;
    font-size: 28px;
    letter-spacing: -1px;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgrey;
    text-align: center;
  }
  .payment-li {
    padding: 20px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    .payment-title {
      flex: 0.2;
      font-weight: 600;
    }
    .payment-address {
      flex: 0.8;
    }
  }
`;

export default Payment;