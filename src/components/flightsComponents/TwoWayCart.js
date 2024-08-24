import React from 'react';
import {View} from 'react-native';
import TwoWayFlightCard from './TwoWayFlightCard';
import flightData from '../../data/twoWayFlightData.json'; // Import the flight data

const TwoWayCart = ({selectedId}) => {
  const flight = flightData.find(flight => flight.id === selectedId);

  console.log('TwoWayCart flight:', flight); // Debugging line

  if (!flight) {
    return null;
  }

  const staticFlight = {
    flightNumber: 'TK123',
    airline: 'Turkish Airlines',
    flightDuration: '3h 30m',
    departureDate: '2024-08-25',
    arrivalDate: '2024-08-25',
    departureCity: 'Istanbul',
    arrivalCity: 'New York',
    departureTime: '14:00',
    arrivalTime: '17:30',
    layoverFlightDuration: '1h 30m',
    layoverDepartureDate: '2024-08-25',
    layoverArrivalDate: '2024-08-25',
    layoverDepartureTime: '15:00',
    layoverArrivalTime: '16:30',
    layoverCity: 'London',
  };

  const TwoWayCart = () => {
    return (
      <View>
        <TwoWayFlightCard flight={staticFlight} />
      </View>
    );
  };
};
export default TwoWayCart;
