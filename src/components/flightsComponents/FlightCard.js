import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, spacing} from '../../style';
import FlightHeader from '../flightCardComponents/FlightHeader';
import FlightDates from '../flightCardComponents/FlightDates';
import FlightDetails from '../flightCardComponents/FlightDetails';
import FlightTabs from '../flightCardComponents/FlightTabs';

const FlightCard = ({flight, isFocused}) => {
  if (!flight) return null;

  return (
    <View style={[styles.boardingPass, isFocused && styles.focusedCard]}>
      <FlightHeader flight={flight} />
      <FlightDates
        departureDate={flight.departureDate}
        arrivalDate={flight.arrivalDate}
      />
      <FlightDetails
        departureCity={flight.departureCity}
        arrivalCity={flight.arrivalCity}
        departureTime={flight.departureTime}
        arrivalTime={flight.arrivalTime}
      />
      <FlightTabs isFocused={isFocused} />
    </View>
  );
};

const styles = StyleSheet.create({
  boardingPass: {
    marginHorizontal: spacing.ten * 2,
    marginVertical: spacing.ten / 2,
    borderRadius: spacing.medium,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium + 2,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: spacing.one,
    position: 'relative',
  },
  focusedCard: {
    width: spacing.container,
  },
});

export default FlightCard;
