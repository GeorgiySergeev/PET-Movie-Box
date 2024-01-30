import { createSlice } from '@reduxjs/toolkit';
import * as API from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addCase(API.getToken.fulfilled, (state, action) => {
      console.log(action);
      state.token = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
