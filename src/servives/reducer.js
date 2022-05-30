import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

export const rootReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    resetData: (state) => {
      Object.assign(state, initialState);
    },
    updateData: (state, action) => {
      state.basket.push(action.payload);
    },
    removeData: (state, action) => {
      state.basket = state.basket.filter((it) => it.id !== action.payload);
    },
  },
});


export const { updateData, removeData, resetData } = rootReducer.actions;

export default rootReducer.reducer;
