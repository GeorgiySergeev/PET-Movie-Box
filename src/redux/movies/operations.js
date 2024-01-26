import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTrending, searchMovie } from 'servises/api';

// import axios from 'axios';
// const API_KEY = '4c0e7f751de589a214c7a7cb256ddfec';
// const BASE_URL = 'https://api.themoviedb.org/3';

// axios.defaults.params = {
//   api_key: API_KEY,
// };

export const fetchTopMovies = createAsyncThunk(
  'movies/fetchTop',
  async (period, thunkAPI) => {
    try {
      const response = await getAllTrending(period);

      //   const response = await axios(`${BASE_URL}/trending/all/${period}`);
      //   console.log(response.data.results);
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
      const response = await searchMovie(query, 1);
      console.log(response);

      //   const response = await axios(`${BASE_URL}/trending/all/${period}`);
      //   console.log(response.data.results);
      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
