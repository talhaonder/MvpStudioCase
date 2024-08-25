import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconT from 'react-native-vector-icons/MaterialCommunityIcons';
import {buttonSizes, colors, spacing, typography} from '../../style';

const FlightDates = ({departureDate, arrivalDate}) => (
  <View style={styles.flightDates}>
    <FlightDate
      icon="arrow-top-right-thin-circle-outline"
      date={departureDate}
    />
    <FlightDate
      icon="arrow-bottom-right-thin-circle-outline"
      date={arrivalDate}
    />
  </View>
);

const FlightDate = ({icon, date}) => (
  <View style={styles.flightDate}>
    <IconT name={icon} size={buttonSizes.iconSize} color="#6b7280" />
    <Text style={styles.dateText}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  flightDates: {
    paddingVertical: spacing.ten / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flightDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: typography.fontSize.medium,
    color: colors.gray,
    marginLeft: spacing.thin,
  },
});

export default FlightDates;
