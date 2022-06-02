import react from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginState } from '../service/userReducer';
import { auth } from '../firebase';

const Header = () => { 
  const basketData = useSelector((state) => state.basketData.basket);
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  console.log(user)
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else { 
      dispatch(loginState(true));
    }
  };

  return (
    <Container>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header-logo"
        />
      </Link>
      <SearchDiv>
        <input type="text" />
        <SearchIcon className="header-search-icon" />
      </SearchDiv>
      <HeaderNavList>
        <Link to={!user && '/login'}>
          <li className="header-option">
            <span className="header-option-one">Hello {user ? user.email : 'Guest'}</span>
            <span className="header-option-second" onClick={handleAuthentication}>
              {user ? 'Sign Out' : 'Sign in'}
            </span>
          </li>
        </Link>
        <li className="header-option">
          <span className="header-option-one">Returns</span>
          <span className="header-option-second">& Orders</span>
        </li>
        <li className="header-option">
          <span className="header-option-one">your</span>
          <span className="header-option-second">Prime</span>
        </li>
        <Link to="/checkout">
          <li className="header-shoppingBasket">
            <ShoppingBasketIcon />
            <span className="header-option-second header-shoppingBasket-count">
              {basketData.length}
            </span>
          </li>
        </Link>
      </HeaderNavList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 60px;
  z-index: 100;
  background-color: #131921;
  .header-logo {
    width: 100px;
    object-fit: contain;
    margin: 18px 20px 0;
  }
`;
const SearchDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  input {
    width: 100%;
    height: 12px;
    padding: 10px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .header-search-icon {
    padding: 5px;
    height: 22px !important;
    background-color: #febd69;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const HeaderNavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  .header-option {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    color: #fff;
    .header-option-one {
      font-size: 14px;
    }
    .header-option-second {
      font-size: 16px;
      font-weight: 800;
    }
  }
  .header-shoppingBasket {
    display: flex;
    align-items: center;
    color: #fff;
    .header-shoppingBasket-count {
      margin: 0 10px;
    }
  }
`;

export default Header;