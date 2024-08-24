// src/components/flightsComponents/FlightCart.js
import React from 'react';
import {View} from 'react-native';
import FlightCard from './FlightCard'; // Import the FlightCard component

const FlightCart = ({flight, flightType = 'isOneWay', isFocused = false}) => {
  if (!flight) {
    return null; // If no flight data is available, render nothing
  }

  return (
    <View>
      <FlightCard flight={flight} isFocused={isFocused} />
    </View>
  );
};

export default FlightCart;
