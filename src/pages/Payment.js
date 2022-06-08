import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { basketPriceSum } from '../components/SubTotal';
import axios from '../axios';
import { useDispatch } from 'react-redux';
import { emptyData } from '../service/basketReducer';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';


const Payment = () => {
  const userData = useSelector(state => state.userData.user)
  const basketData = useSelector(state => state.basketData.basket);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);
  
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  
  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: 'post',
          // stripe expects the total in a currencies subunits
          url: `/payments/create?total=${basketPriceSum(basketData) * 100}`,
        });
        console.log(response.data.clientSecret);

        setClientSecret(response.data.clientSecret)
      } catch (e) { 
        console.log(e.message)
      } 
     
    }

    getClientSecret()
  }, [basketData])

  console.log('the secret is >>>>', clientSecret)

  const handleSubmit = async (event) => { 
    // do all the fancy stripe stuff..
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => { 
      // paymentIntent = payment confirmation
      try {
        const doc = addDoc(collection(db, 'users'), {})
          .addDoc(userData?.uid)
          .addDoc(collection('users', 'orders'), {})
          .addDoc(paymentIntent.id)
          .set({
            basket: basketData,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        console.log(doc)
          //await addDoc(collection(db, 'users'),)
      } catch (e) { 
         console.error('Error adding document: ', e);
      }

      
      
      // db.collection('users')
      //   .doc(users?.id)
      //   .collection('orders')
      //   .doc(paymentIntent)
      //   .set({
      //     basket: basketData,
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created,
      //   })

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch(emptyData())

      navigation('/orders', {replace: true});
    })
  }

  const handleChange = (e) => { 
    // listen for changes in the cardelement
    // and display any errors as the customer types their card details

    setDisabled(e.empty)
    setError(e.error ? e.error.message : "");
  }

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
          <div className="payment-detail">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <p>Order Total: ${basketPriceSum(basketData)}</p>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
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
    .payment-address,
    .payment-detail {
      flex: 0.8;
    }
  }
`;

export default Payment;