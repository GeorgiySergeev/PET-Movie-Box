import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './movies/moviesSlice';
import { tvShowReduser } from './TV-shows/TvShow-slice';
import { filterReducer } from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvshow: tvShowReduser,
    filter: filterReducer,
  },
});
