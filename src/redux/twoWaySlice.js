// twoWaySlice.js
import {createSlice} from '@reduxjs/toolkit';

const twoWaySlice = createSlice({
  name: 'twoWayFlights',
  initialState: {
    twoWayFlightCards: [],
    selectedTwoWayFlight: null,
  },
  reducers: {
    addTwoWayFlight: (state, action) => {
      state.twoWayFlightCards.push(action.payload);
    },
    removeTwoWayFlight: (state, action) => {
      state.twoWayFlightCards = state.twoWayFlightCards.filter(
        flight => flight.id !== action.payload,
      );
    },
    setSelectedTwoWayFlight: (state, action) => {
      state.selectedTwoWayFlight = action.payload;
    },
    clearSelectedTwoWayFlight: state => {
      state.selectedTwoWayFlight = null;
    },
  },
});

export const {
  addTwoWayFlight,
  removeTwoWayFlight,
  setSelectedTwoWayFlight,
  clearSelectedTwoWayFlight,
} = twoWaySlice.actions;

export default twoWaySlice.reducer;
