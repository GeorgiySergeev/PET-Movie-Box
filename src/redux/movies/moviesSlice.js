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

  //   reducers: {
  //     addMovies(state, action) {
  //       state.movies.push(action.payload);
  //     },
  //   },

  extraReducers: builder => {
    builder
      .addCase(API.fetchTopMovies.pending, handlePending)
      .addCase(API.fetchTopMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload;
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
        console.log(action.payload);
        state.movies = action.payload;
      });
  },
});

// export const { addMovies } = movieSlise.actions;
export const moviesReducer = movieSlise.reducer;
