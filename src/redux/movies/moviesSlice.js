import { createSlice } from '@reduxjs/toolkit';

import * as API from './operations';

const appState = {
  movies: [],
  totalPage: null,
  isLoading: true,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const movieSlise = createSlice({
  name: 'movies',

  initialState: appState,

  reducers: {
    clearMovies(state) {
      state.movies = [];
      state.totalPage = null;
      state.isLoading = false;
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(API.fetchTopMovies.pending, handlePending)
      .addCase(API.fetchTopMovies.fulfilled, (state, action) => {
        state.totalPage = action.payload.total_pages;
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload.results;
      })
      .addCase(API.fetchTopMovies.rejected, handleRejected)
      .addCase(API.fetchSearchedMovies.pending, handlePending)
      .addCase(API.fetchSearchedMovies.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload;
      })
      .addCase(API.fetchSearchedMovies.rejected, handleRejected)
      .addCase(API.fetchFilteredMovies.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.movies = action.payload;
      })
      .addCase(API.fetchTopRatedMovies.pending, handlePending)
      .addCase(API.fetchTopRatedMovies.fulfilled, (state, action) => {
        // console.log('action.payload', action.payload);
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload.results;
        state.totalPage = action.payload.total_pages;
      })
      .addCase(API.fetchTopRatedMovies.rejected, handleRejected)
      .addCase(API.fetchTopRatedTv.pending, handlePending)
      .addCase(API.fetchTopRatedTv.fulfilled, (state, action) => {
        // console.log('action.payload', action.payload);
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload.results;
        state.totalPage = action.payload.total_pages;
      })
      .addCase(API.fetchTopRatedTv.rejected, handleRejected);
  },
});

export const { clearMovies } = movieSlise.actions;
export const moviesReducer = movieSlise.reducer;
