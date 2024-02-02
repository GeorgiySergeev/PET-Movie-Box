import { createSlice } from '@reduxjs/toolkit';
import * as API from './auth-operations';

const initialState = {
  // user: { name: null, email: null },
  name: '',
  email: '',
  token: null,
  error: null,
  isLoggedIn: false,
  id: null,
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

  reducers: {
    setIsLoggedIn(state, action) {
      // console.log(action.payload);
      state.isLoggedIn = action.payload;
    },

    setUser(state, action) {
      // console.log(action.payload);
      const { email, token, id, isLoggedIn } = action.payload;
      state.email = email;
      state.token = token;
      state.isLoggedIn = isLoggedIn;
      state.id = id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
  },

  extraReducers: builder => {
    builder.addCase(API.getTokenTmdb.fulfilled, (state, action) => {
      console.log(action);
      state.token = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setIsLoggedIn, setUser, removeUser } = authSlice.actions;
