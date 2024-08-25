import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {buttonSizes, colors, spacing, typography} from '../../style';

const FlightDetails = ({
  departureCity,
  arrivalCity,
  departureTime,
  arrivalTime,
}) => (
  <View style={styles.cardBody}>
    <View style={styles.flightDetails}>
      <Text style={styles.cityText}>{departureCity}</Text>
      <View style={styles.flightPath}>
        <Text style={styles.dashedLine}>
          --- {''} {''} ---
        </Text>
        <Icon
          name="airplane-outline"
          size={buttonSizes.defaultHeight}
          color="black"
        />
      </View>
      <Text style={styles.cityText}>{arrivalCity}</Text>
    </View>
    <View style={styles.travelTimes}>
      <Text style={styles.travelTimeText}>{departureTime}</Text>
      <Text style={styles.travelTimeText}>{arrivalTime}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardBody: {
    marginBottom: spacing.ten,
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityText: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium,
    color: colors.black,
    marginBottom: spacing.ten,
  },
  flightPath: {
    alignItems: 'center',
  },
  dashedLine: {
    borderStyle: 'dashed',
    position: 'absolute',
    alignSelf: 'center',
    top: spacing.small,
    width: spacing.ten * 8,
    zIndex: -spacing.one,
    letterSpacing: spacing.ten / 2,
  },
  travelTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  travelTimeText: {
    color: colors.timeColor,
    fontWeight: typography.fontWeight.medium,
  },
});

export default FlightDetails;
