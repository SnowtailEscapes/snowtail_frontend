import { configureStore } from '@reduxjs/toolkit'
import itineraryReducer from "./slice/itinerarySlice"

export const store = configureStore({
  reducer: {
    itinerary : itineraryReducer,
  },
})