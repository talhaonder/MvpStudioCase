// src/components/flightsComponents/EmptyState.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch} from 'react-redux';
import {addFlight} from '../../redux/flightSlice'; // Redux slice'tan addFlight action'ını import edin
import AddFlightButton from './AddFlightButton';
import {colors} from '../../style';
const EmptyState = () => {
  const dispatch = useDispatch();

  const handleAddFlight = () => {
    dispatch(addFlight({id: new Date().toISOString(), name: 'Yeni Uçuş'})); // Örnek bir uçuş ekleme
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="plane" size={30} color={'black'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Not Flights Added Yet</Text>
        <Text style={styles.descriptionText}>
          Let's get started on your jet lag plan! Add your upcoming flights to
          begin your journey.
        </Text>
      </View>
      <AddFlightButton onPress={handleAddFlight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 26,
  },
  iconContainer: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
    borderColor: colors.lightGray,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 8,
    fontWeight: 'bold',
    color: colors.black,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.littleTextColor,
  },
});

export default EmptyState;
