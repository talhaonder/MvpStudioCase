import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import EmptyState from '../components/flightsComponents/EmptyState';
import Header from '../components/flightsComponents/Header';
import FlightCard from '../components/flightsComponents/FlightCard';
import TwoWayFlightCard from '../components/flightsComponents/TwoWayFlightCard';
import RemoveButton from '../components/flightsComponents/RemoveButton';

const FlightsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <RemoveButton />
      <TwoWayFlightCard />
      <View style={styles.main}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlightsScreen;
