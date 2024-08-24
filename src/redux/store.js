// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import flightReducer from './flightSlice';

const store = configureStore({
  reducer: {
    flights: flightReducer,
  },
});

export default store;
