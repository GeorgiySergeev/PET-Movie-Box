import { createAsyncThunk } from '@reduxjs/toolkit';
import { createRequestToken } from '../../servises/auth-api';

export const getToken = createAsyncThunk(
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