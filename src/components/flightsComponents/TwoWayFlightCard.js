import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, layout, spacing} from '../../style';

import FlightDetails from '../twoWayComponents/FlightDetails';
import FlightDates from '../twoWayComponents/FlightDates';
import FlightHeader from '../twoWayComponents/FlightHeader';
import LayoverCard from '../twoWayComponents/LayoverCard';

const TwoWayFlightCard = ({flight, isFocused}) => {
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
      <View style={styles.middle}></View>
      <LayoverCard flight={flight} />
      <View style={[styles.tabLeft, isFocused && styles.focusedTab]}></View>
      <View style={[styles.tabRight, isFocused && styles.focusedTab]}></View>
      <View style={[styles.upTabLeft, isFocused && styles.focusedTab]}></View>
      <View style={[styles.upTabRight, isFocused && styles.focusedTab]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  boardingPass: {
    marginHorizontal: spacing.ten * 2,
    marginVertical: spacing.thin,
    borderRadius: spacing.ten * 2,
    paddingVertical: spacing.small,
    // paddingHorizontal: spacing.large, better desing for flight card
    paddingHorizontal: spacing.medium + 2,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: spacing.one,
    position: 'relative',
  },
  focusedCard: {
    width: spacing.container,
  },
  middle: {
    borderTopWidth: spacing.one,
    borderColor: colors.lightGray,
    marginBottom: spacing.medium,
  },
  tabLeft: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    // width: spacing.medium,  better desing for flight card
    // height: spacing.medium * 2, better desing for flight card
    width: spacing.ten + 1,
    height: spacing.ten * 2,
    borderTopLeftRadius: spacing.xLarge,
    borderBottomLeftRadius: spacing.xLarge,
    borderLeftWidth: spacing.one,
    borderTopWidth: spacing.one,
    borderBottomWidth: spacing.one,
    borderColor: colors.lightGray,
    bottom: spacing.ultra,
    // right: 1, better desing for flight card
    right: -spacing.half,
    zIndex: layout.zIndex.top,
  },
  tabRight: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    // width: spacing.medium,  better desing for flight card
    // height: spacing.medium * 2, better desing for flight card
    width: spacing.ten + 1,
    height: spacing.ten * 2,
    borderTopRightRadius: spacing.xLarge,
    borderBottomRightRadius: spacing.xLarge,
    borderRightWidth: spacing.one,
    borderTopWidth: spacing.one,
    borderBottomWidth: spacing.one,
    borderColor: colors.lightGray,
    bottom: spacing.ultra,
    left: -spacing.one,
    zIndex: layout.zIndex.top,
  },
  upTabLeft: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    // width: spacing.medium,  better desing for flight card
    // height: spacing.medium * 2, better desing for flight card
    width: spacing.ten + 1,
    height: spacing.ten * 2,
    borderTopLeftRadius: spacing.xLarge,
    borderBottomLeftRadius: spacing.xLarge,
    borderLeftWidth: spacing.one,
    borderTopWidth: spacing.one,
    borderBottomWidth: spacing.one,
    borderColor: colors.lightGray,
    top: spacing.hundred - 20,
    // right: 1, better desing for flight card
    right: -spacing.half,
    zIndex: layout.zIndex.top,
  },
  upTabRight: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    // width: spacing.medium,  better desing for flight card
    // height: spacing.medium * 2, better desing for flight card
    width: spacing.ten + 1,
    height: spacing.ten * 2,
    borderTopRightRadius: spacing.xLarge,
    borderBottomRightRadius: spacing.xLarge,
    borderRightWidth: spacing.one,
    borderTopWidth: spacing.one,
    borderBottomWidth: spacing.one,
    borderColor: colors.lightGray,
    top: spacing.hundred - 20,
    left: -spacing.one,
    zIndex: layout.zIndex.top,
  },
  focusedTab: {
    backgroundColor: colors.transparentBackground,
  },
});

export default TwoWayFlightCard;
