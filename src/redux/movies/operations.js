import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllTrending,
  searchMovie,
  getFilteredMovies,
  // getTopRated,
  // getAllTrendingTvShow,
  getTopRatedTv,
  getTopRatedMovies,
} from 'servises/api';

export const fetchTopMovies = createAsyncThunk(
  'movies/fetchTop',
  async (period, thunkAPI) => {
    try {
      const response = await getAllTrending(period);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTvShow',
  async (page, thunkAPI) => {
    try {
      const response = await getTopRatedMovies(page);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTopRatedTv = createAsyncThunk(
  'movies/fetchTopRated',
  async (page, thunkAPI) => {
    try {
      const response = await getTopRatedTv(page);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSearchedMovies = createAsyncThunk(
  'movies/fetchSearched',
  async (query, thunkAPI) => {
    try {
      const response = await searchMovie(query);
      console.log(response);

      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredMovies = createAsyncThunk(
  'movies/fetchFiltered',

  async (data, thunkAPI) => {
    try {
      const response = await getFilteredMovies(data);
      console.log('response', response);

      if (response && response.data) {
        return response;
      } else {
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
