import { createAsyncThunk } from '@reduxjs/toolkit';
import { sortByGenre } from '../../servises/api';

export const getFilteredData = createAsyncThunk(
  'filter/filteredData',
  async genre => {
    try {
      const response = await sortByGenre(genre);
      console.log('response', response);
    } catch (error) {}
  }
);
