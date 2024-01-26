import { createAsyncThunk } from '@reduxjs/toolkit';
// import TvShows from 'pages/TvShows';
import { getAllTrendingTvShow } from 'servises/api';

export const fetchTopTvShow = createAsyncThunk(
  'tvshow/fetchTop',
  async (period, thunkAPI) => {
    try {
      const response = await getAllTrendingTvShow(period);
      //   console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
