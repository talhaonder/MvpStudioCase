// src/redux/flightSlice.js
import {createSlice} from '@reduxjs/toolkit';

const flightSlice = createSlice({
  name: 'flights',
  initialState: {
    flightCards: [],
    selectedFlight: null,
  },
  reducers: {
    addFlight: (state, action) => {
      state.flightCards.push(action.payload);
    },
    removeFlight: (state, action) => {
      state.flightCards = state.flightCards.filter(
        flight => flight.id !== action.payload,
      );
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    clearSelectedFlight: state => {
      state.selectedFlight = null;
    },
  },
});

export const {addFlight, removeFlight, setSelectedFlight, clearSelectedFlight} =
  flightSlice.actions;

export default flightSlice.reducer;
