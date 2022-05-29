import React from 'react';
import styled from 'styled-components';
import Product from '../components/Product';

const Home = () => {

  return (
    <Container>
      <img
        src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
        alt=""
        className="home-img"
      />
      <HomeRowComponents>
        <Product
          title={
            'SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest'
          }
          price={'34.99'}
          rating={3}
          id={'1231546'}
          img={'https://m.media-amazon.com/images/I/81L8fk7SGQL._AC_SY450_.jpg'}
        />
        <Product
          title={'Funko Pop! Disney: Toy Story 4 - Jessie, Multicolor'}
          price={'24.79'}
          rating={5}
          id={'1231587'}
          img={'https://m.media-amazon.com/images/I/71QtsVrxc8L._AC_SX425_.jpg'}
        />
        <Product
          title={'Apple AirPods Max - Space Gray'}
          price={'421.52'}
          rating={5}
          id={'1231578'}
          img={'https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SX342_.jpg'}
        />
      </HomeRowComponents>
      <HomeRowComponents>
        <Product
          title={'Listerine Total Care Anticavity Fluoride Mouthwash 1 L'}
          price={'18.89'}
          rating={4}
          id={'1231599'}
          img={'https://m.media-amazon.com/images/I/71lzpWViySL._AC_SX522_.jpg'}
        />
        <Product
          title={'Exerpeutic Folding Exercise Bike, 8 Levels of Resistance Stationary Bike'}
          price={'93.90'}
          rating={4}
          id={'1231749'}
          img={'https://m.media-amazon.com/images/I/61jKgHKBotL._AC_SX425_.jpg'}
        />
        <Product
          title={'Champion Ameritage Dad Adjustable Cap'}
          rating={5}
          price={'14.72'}
          id={'1214749'}
          img={'https://m.media-amazon.com/images/I/61skamvk2QL._AC_UX466_.jpg'}
          
        />
      </HomeRowComponents>
      <HomeRowComponents>
        <Product
          title={'All-New Insignia NS-75F301NA22 75-inch F30 Series LED 4K UHD Smart Fire TV'}
          price={'649.99'}
          rating={4}
          id={'1214859'}
          img={'https://m.media-amazon.com/images/I/81RMiofn0GL._AC_SX355_.jpg'}
        />
      </HomeRowComponents>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;

  .home-img {
    width: 100%;
    z-index: -10;
    margin-bottom: -160px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const HomeRowComponents = styled.div`
  display: flex;
  margin: 0 5px;
`;

export default Home