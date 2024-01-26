import { createSlice } from '@reduxjs/toolkit';
import * as API from './TvShows-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tvshowSlice = createSlice({
  name: 'tvshow',
  initialState: {
    tvshow: [],
    isLoading: true,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(API.fetchTopTvShow.pending, handlePending)
      .addCase(API.fetchTopTvShow.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.tvshow = action.payload;
      })
      .addCase(API.fetchTopTvShow.rejected, handleRejected);
  },
});

export const tvShowReduser = tvshowSlice.reducer;
