// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import flightReducer from './flightSlice';
import twoWayFlightReducer from './twoWaySlice';

const store = configureStore({
  reducer: {
    flights: flightReducer,
    twoWayFlights: twoWayFlightReducer,
  },
});

export default store;
