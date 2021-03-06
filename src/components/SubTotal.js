import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const basketPriceSum = (data) => {
  if (data.length === 0) return;
  if (data.length === 1) return data[0].price;

  let num = 0.0;
  data.forEach((item) => {
    num = (parseFloat(num) + parseFloat(item.price)).toFixed(2);
    return num;
  });

  return num;
  }

const SubTotal = () => {
  const navigation = useNavigate();
  const basketData = useSelector(state => state.basketData.basket);

  return (
    <Container>
      <p>
        Subtotal({basketData.length} itmes): <strong>{basketPriceSum(basketData)}</strong>
      </p>
      <input name="check-inp" type="checkbox" />
      <label htmlFor="check-inp">This order contains a gift</label>
      <button className="subtotal-btn" onClick={() => {
        if (basketData.length > 0) {
          navigation('/payment');
        };
      }}>Proceed to checkout</button>
    </Container>
  );
};

const Container = styled.div`
  min-width: 280px;
  height: 150px;
  padding: 20px;
  margin-left: 15px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  p {
    margin-bottom: 20px;
  }
  p + input {
    margin-right: 5px;
  }
  .subtotal-btn {
    width: 100%;
    height: 30px;
    margin-top: 20px;
    border: 1px solid #ffce00;
    background-color: #ffd814;
    border-radius: 2px;
    color: #111;
  }
`;

export default SubTotal