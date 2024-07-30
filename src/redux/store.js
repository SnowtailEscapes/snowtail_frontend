import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slice/currencySlice';
import itineraryReducer from './slice/itinerarySlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    itinerary: itineraryReducer,
  },
});