import { combineReducers } from '@reduxjs/toolkit';
import  basketReducer  from './basketReducer';
import  userReducer  from './userReducer';

const rootReducer = combineReducers({
  basketData: basketReducer,
  userData: userReducer,
});

export default rootReducer;