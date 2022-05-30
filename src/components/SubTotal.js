import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SubTotal = () => {
  const basketData = useSelector(state => state.reducer.basket);

  function basketPriceSum(data) { 
    if (data.length === 0) return 
    if (data.length === 1) return data[0].price;
    
    let num = 0.00;
    data.forEach((item) => { 
      num = (parseFloat(num) + parseFloat(item.price)).toFixed(2);
      return num;
    })
      
    return num
  }

  return (
    <Container>
      <p>
        Subtotal({basketData.length} itmes): <strong>{basketPriceSum(basketData)}</strong>
      </p>
      <input name="check-inp" type="checkbox" />
      <label htmlFor="check-inp">This order contains a gift</label>
      <button className="subtotal-btn">Proceed to checkout</button>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
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