import { createSlice } from '@reduxjs/toolkit';
import { getFilteredData } from './filter-operations';

const initialState = {
  filter: [],
  isLoading: true,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getFilteredData.pending, handlePending)
      .addCase(getFilteredData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.filter = action.payload;
      });
  },
});

export const filterReducer = filterSlice.reducer;
