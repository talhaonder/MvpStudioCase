import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AddFlightButton from './AddFlightButton';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="plane" size={30} color={'black'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>No Flights Added Yet</Text>
        <Text style={styles.descriptionText}>
          Let's get started on your jet lag plan! Add your upcoming flights to
          begin your journey.
        </Text>
      </View>
      <AddFlightButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 26,
  },
  iconContainer: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
    borderColor: '#e5e7eb',
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
    color: 'black',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#4b5563',
  },
});

export default EmptyState;
