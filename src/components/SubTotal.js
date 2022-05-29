import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';

const SubTotal = () => {
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 itmes): <strong>0</strong>
            </p>
            <input name="check-inp" type="checkbox" />
            <label htmlFor="check-inp">This order contains a gift</label>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className='subtotal-btn'>Proceed to checkout</button>
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
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    background-color: #f0c14b;
    border-radius: 2px;
    color: #111;
  }
`;

export default SubTotal