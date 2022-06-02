import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  user: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.login = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginState, setUser, logoutUser } = userReducer.actions;

export default userReducer.reducer;
