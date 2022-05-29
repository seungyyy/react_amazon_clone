import react from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Header = () => { 
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
        {/* logo */}
      </SearchDiv>
      <HeaderNavList>
        <li className="header-option">
          <span className="header-option-one">Hello Guest</span>
          <span className="header-ption-second">Sign in</span>
        </li>
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
            <span className="header-option-second header-shoppingBasket-count">0</span>
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
  }
  .header-search-icon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
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