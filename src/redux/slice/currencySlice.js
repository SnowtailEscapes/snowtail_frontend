import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrencyRates = createAsyncThunk(
  "currency/fetchCurrencyRates",
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_CURRENCY}`
    );
    const data = await response.json();
    return data.inr;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    selectedCurrency: "inr",
    conversionRates: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.conversionRates = action.payload;
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCurrency } = currencySlice.actions;
export default currencySlice.reducer;