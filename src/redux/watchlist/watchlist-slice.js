import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlist: [],
};

const watchlistSlise = createSlice({
  name: 'watchlist',

  initialState,

  reducers: {
    setWatchList(state, action) {
      console.log(action.payload);
      state.watchlist = action.payload;
    },
    addMovie(state, action) {
      // console.log(action.payload);
      state.watchlist.push(action.payload);
    },

    // updateMovieInWatchList(state, action) {
    //   console.log(action);
    //   const { id } = action.payload;
    //   state.watchlist = state.watchlist.map(item =>
    //     item.id === id ? { ...item, isWatched: !item.isWatched } : item
    //   );
    // },

    updateMovieInWatchList(state, action) {
      const { id } = action.payload;
      state.watchlist = state.watchlist.map(item =>
        item.id === id ? { ...item, isWatched: !item.isWatched } : item
      );
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

export const {
  addMovie,
  removeMovie,
  claerWatchlist,
  setWatchList,
  updateMovieInWatchList,
} = watchlistSlise.actions;
export const watchlistReduser = watchlistSlise.reducer;
