import { createAsyncThunk } from '@reduxjs/toolkit';
import { createRequestToken } from '../../servises/tmdb-auth';


export const getTokenTmdb = createAsyncThunk(
  'auth/token',

  async (_, thunkAPI) => {
    try {
      const response = await createRequestToken();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return;
    }
    console.log('User Set');
  }
);
