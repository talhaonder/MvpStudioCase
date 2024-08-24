// src/screens/FlightsScreen.js
import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EmptyState from '../components/flightsComponents/EmptyState';
import Header from '../components/flightsComponents/Header';
import FlightCard from '../components/flightsComponents/FlightCard';
import RemoveButton from '../components/flightsComponents/RemoveButton';
import FlightCart from '../components/flightsComponents/FlightCart';
import flightData from '../data/flightData.json';
import {
  addFlight,
  removeFlight,
  setSelectedFlight,
  clearSelectedFlight,
} from '../redux/flightSlice';
import {colors, spacing} from '../style';

const FlightsScreen = () => {
  const dispatch = useDispatch();
  const flightCards = useSelector(state => state.flights.flightCards);
  const selectedFlight = useSelector(state => state.flights.selectedFlight);

  // Add flight handler
  const handleAddFlight = () => {
    console.log('Add Flight Button Pressed');

    const getUniqueFlight = () => {
      const filteredFlights = flightData.filter(
        flight => flight.id >= 1 && flight.id <= 4,
      );

      // Filter out flights that are already added
      const availableFlights = filteredFlights.filter(
        flight => !flightCards.some(card => card.id === flight.id),
      );

      if (availableFlights.length === 0) {
        console.log('No more unique flights available.');
        return null;
      }

      const newFlight =
        availableFlights[Math.floor(Math.random() * availableFlights.length)];
      console.log(`Selected new flight with ID: ${newFlight.id}`);
      return newFlight;
    };

    const newFlight = getUniqueFlight();

    if (newFlight) {
      dispatch(addFlight(newFlight));
    } else {
      alert('All available flights have been selected.');
    }
  };

  const handleFlightCardPress = flightId => {
    console.log(`Flight card pressed with ID: ${flightId}`);
    dispatch(setSelectedFlight(flightId));
  };

  const handleRemoveFlight = () => {
    dispatch(removeFlight(selectedFlight));
    dispatch(clearSelectedFlight());
  };

  const getSelectedFlightData = () => {
    return flightCards.find(flight => flight.id === selectedFlight) || null;
  };

  const renderFlightCard = ({item}) => (
    <TouchableOpacity onPress={() => handleFlightCardPress(item.id)}>
      <FlightCard flight={item} />
    </TouchableOpacity>
  );

  useEffect(() => {
    console.log(`Current Flight Cards:`, flightCards);
    console.log(`Selected Flight ID:`, selectedFlight);
  }, [flightCards, selectedFlight]);

  const renderSelectedFlightCart = () => {
    const selectedFlightData = getSelectedFlightData();
    if (!selectedFlightData) return null;

    return (
      <FlightCart
        flight={selectedFlightData} // Pass the selected flight data
        flightType="isOneWay"
        isFocused={true}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onAddFlight={handleAddFlight} />
      {flightCards.length === 0 ? (
        <View style={styles.main}>
          <EmptyState onAddFlight={handleAddFlight} />
        </View>
      ) : (
        <FlatList
          data={flightCards}
          renderItem={renderFlightCard}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<EmptyState />}
        />
      )}
      <Modal
        transparent={true}
        visible={!!selectedFlight}
        animationType="fade"
        onRequestClose={() => dispatch(clearSelectedFlight())}>
        <TouchableWithoutFeedback
          onPress={() => dispatch(clearSelectedFlight())}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <>
                {renderSelectedFlightCart()}
                <View style={styles.removeButtonContainer}>
                  <RemoveButton onPress={handleRemoveFlight} />
                </View>
              </>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {alignItems: 'center', justifyContent: 'center', flex: spacing.one},
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  modalContent: {
    width: '90%',
    maxWidth: spacing.hundred * 4,
    backgroundColor: colors.white,
    padding: spacing.ten * 2,
    borderRadius: spacing.ten,
  },
  removeButtonContainer: {
    marginTop: spacing.ten * 2,
    alignItems: 'center',
  },
});

export default FlightsScreen;
