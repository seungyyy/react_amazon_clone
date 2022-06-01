import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateData } from '../servives/basketReducer';

const Product = ({ title, price, rating, img }) => {
  const dispatch = useDispatch();

  const addToBasket = () => { 
    const id = Math.floor(Math.random() * 99999) + 10000
    dispatch(updateData({
      id: id,
      name: title,
      price: price,
      img: img
    }));
  };

  return (
    <>
      <Content>
        <div className="product-info">
          <p>{title}</p>
          <p className="prodcut-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
        </div>
        <img src={img} alt="" className="product-img" />
        <button onClick={addToBasket} className="product-button">
          Add to Basket
        </button>
      </Content>
    </>
  );
}

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  padding: 20px;
  max-height: 400px;
  min-width: 100px;
  background-color: #fff;
  z-index: 1;
  .product-img {
    min-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .product-info {
    height: 100px;
    margin-bottom: 15px;
    .prodcut-price {
      margin-top: 5px;
      small {
        font-size: 13px;
      }
      strong {
        font-weight: 800;
      }
    }
    .product-rating {
      span {
        margin: 0 -1px;
      }
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
`;



export default Product;