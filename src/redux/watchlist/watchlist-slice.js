import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlist: [],
};

const watchlistSlise = createSlice({
  name: 'watchlist',

  initialState,

  reducers: {
    setWatchList(state, action) {
      console.log(action);
      state.watchlist = action.payload;
    },
    addMovie(state, action) {
      // console.log(action.payload);
      state.watchlist.push(action.payload);
    },
    removeMovie(state, action) {
      state.watchlist = state.watchlist.filter(
        movie => movie.id !== action.payload
      );
    },
    claerWatchlist(state, action) {
      state.watchlist = [];
    },
  },
});

export const { addMovie, removeMovie, claerWatchlist, setWatchList } =
  watchlistSlise.actions;
export const watchlistReduser = watchlistSlise.reducer;
