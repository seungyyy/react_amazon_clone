import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'; 
import { removeData } from '../servives/reducer';

const CheckoutProduct = () => {
  const dispatch = useDispatch();
  const basketData = useSelector((state) => state.reducer.basket);
  const leng = basketData.length;

  
  const removebasketClick = (e) => { 
    dispatch(removeData(parseInt(e.target.dataset.id)));
  }

  return (
    <Container>
      {basketData?.map((it) => (
        <li
          key={it.id}
          className={`${leng === 1 ? 'basket-product' : 'basket-product basket-product-border'}`}
        >
          <img src={it.img} alt="상품이미지" className="product-img" />
          <div className="prodcut-info">
            <strong className="prodcut-name">{it.name}</strong>
            <p className="prodcut-price">
              <small className="prodcut-price-small">$</small>
              {it.price}
            </p>
            <button onClick={removebasketClick} data-id={it.id} className="product-button">
              Remove from basket
            </button>
          </div>
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  .basket-product {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
    .product-img {
      height: 150px;
      width: 150px;
      padding-top: 1rem;
      object-fit: contain;
      box-sizing: border-box;
    }
    .prodcut-info {
      padding-top: 1rem;
      margin-left: 20px;
      box-sizing: border-box;
      .prodcut-name {
        font-weight: 800;
        font-size: 1.1rem;
      }
      .prodcut-price {
        margin-top: 5px;
        font-weight: 800;
        .prodcut-price-small {
          font-size: 13px;
        }
      }
      .product-button {
        margin-top: 10px;
        color: #111;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid #ffce00;
        background-color: #ffd814;
      }
    }
  }
  .basket-product.basket-product-border {
    border-bottom: 1px solid lightgrey;
  }
`;

export default CheckoutProduct;