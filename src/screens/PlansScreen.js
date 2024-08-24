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
import RemoveButton from '../components/flightsComponents/RemoveButton';
import TwoWayFlightCard from '../components/flightsComponents/TwoWayFlightCard';
import flightData from '../data/twoWayFlightData.json';
import {
  addTwoWayFlight,
  removeTwoWayFlight,
  setSelectedTwoWayFlight,
  clearSelectedTwoWayFlight,
} from '../redux/twoWaySlice';

import {colors, spacing} from '../style';

const PlansScreen = () => {
  const dispatch = useDispatch();
  const twoWayFlightCards = useSelector(
    state => state.twoWayFlights.twoWayFlightCards,
  );
  const selectedTwoWayFlight = useSelector(
    state => state.twoWayFlights.selectedTwoWayFlight,
  );

  // Add flight handler
  const handleAddFlight = () => {
    console.log('Add Flight Button Pressed');

    const getUniqueFlight = () => {
      const filteredFlights = flightData.filter(
        flight => flight.id >= 1 && flight.id <= 4,
      );

      // Filter out flights that are already added
      const availableFlights = filteredFlights.filter(
        flight => !twoWayFlightCards.some(card => card.id === flight.id),
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
      dispatch(addTwoWayFlight(newFlight));
    } else {
      alert('All available flights have been selected.');
    }
  };

  const handleFlightCardPress = flightId => {
    console.log(`Flight card pressed with ID: ${flightId}`);

    dispatch(setSelectedTwoWayFlight(flightId));
  };

  const handleRemoveFlight = () => {
    dispatch(removeTwoWayFlight(selectedTwoWayFlight));
    dispatch(clearSelectedTwoWayFlight());
  };

  const getSelectedFlightData = () => {
    return (
      twoWayFlightCards.find(flight => flight.id === selectedTwoWayFlight) ||
      null
    );
  };

  const renderFlightCard = ({item}) => (
    <TouchableOpacity onPress={() => handleFlightCardPress(item.id)}>
      <TwoWayFlightCard flight={item} />
    </TouchableOpacity>
  );

  const renderSelectedFlightCart = () => {
    const selectedFlightData = getSelectedFlightData();
    console.log('Selected Flight Data:', selectedFlightData); // Add this line
    if (!selectedFlightData) return null;

    return <TwoWayFlightCard flight={selectedFlightData} isFocused={true} />;
  };
  useEffect(() => {
    console.log(`Current Two-Way Flight Cards:`, twoWayFlightCards);
    console.log(`Selected Two-Way Flight ID:`, selectedTwoWayFlight);
  }, [twoWayFlightCards, selectedTwoWayFlight]);
  return (
    <SafeAreaView style={styles.container}>
      <Header onAddTwoWay={handleAddFlight} />
      {twoWayFlightCards.length === 0 ? (
        <View style={styles.main}>
          <EmptyState onAddTwoWay={handleAddFlight} />
        </View>
      ) : (
        <FlatList
          data={twoWayFlightCards}
          renderItem={renderFlightCard}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<EmptyState />}
        />
      )}
      <Modal
        transparent={true}
        visible={!!selectedTwoWayFlight}
        animationType="fade"
        onRequestClose={() => {
          dispatch(clearSelectedTwoWayFlight());
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(clearSelectedTwoWayFlight());
          }}>
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
    borderRadius: spacing.one,
  },
  removeButtonContainer: {
    marginTop: spacing.ten * 2,
    alignItems: 'center',
  },
});

export default PlansScreen;
