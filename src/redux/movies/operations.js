import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTrending, searchMovie, getFilteredMovies } from 'servises/api';

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
      const response = await searchMovie(query);
      console.log(response);

      //   const response = await axios(`${BASE_URL}/trending/all/${period}`);
      //   console.log(response.data.results);
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

      // Проверяем, что response содержит нужные данные
      if (response && response.data) {
        return response; // Возвращаем данные
      } else {
        // Если данные отсутствуют, можно вернуть пустой массив или другое значение
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // Обрабатываем ошибку, если необходимо
      // Можно также передать ошибку в payload, если нужно управлять ей в редьюсере
      // throw error;
    }
  }
);
