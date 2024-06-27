import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItinerary = createAsyncThunk('itinerary/fetchItinerary', async () => {
  const response = await fetch('http://localhost:5000/api/itineraries');
  return response.json();
});

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    isLoading: false,
    data: [],
    isError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItinerary.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchItinerary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload.itineraries;
      });
  }
});

export default itinerarySlice.reducer;
