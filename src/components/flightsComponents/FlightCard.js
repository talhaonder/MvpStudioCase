import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconT from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/logo/Turkish-Airlines.png';
import {buttonSizes, colors, spacing, typography} from '../../style';

const FlightCard = ({flight, isFocused}) => {
  // Debugging: Check if flight data is being received
  console.log('FlightCard flight:', flight);
  if (!flight) return null;

  return (
    <View style={[styles.boardingPass, isFocused && styles.focusedCard]}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.companyInfo}>
            <Image
              source={Logo} // Ensure this path is correct
              style={styles.logo}
            />
            <Text style={styles.companyNameText}>
              {flight.flightNumber} · {flight.airline}
            </Text>
          </View>
          <View style={styles.flightDuration}>
            <Text style={styles.flightDurationText}>
              {flight.flightDuration}
            </Text>
          </View>
        </View>
        <View style={styles.flightDates}>
          <FlightDate
            icon="arrow-top-right-thin-circle-outline"
            date={flight.departureDate}
          />
          <FlightDate
            icon="arrow-bottom-right-thin-circle-outline"
            date={flight.arrivalDate}
          />
        </View>
        <View style={styles.cardBody}>
          <View style={styles.flightDetails}>
            <Text style={styles.cityText}>{flight.departureCity}</Text>
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
            <Text style={styles.cityText}>{flight.arrivalCity}</Text>
          </View>
          <View style={styles.travelTimes}>
            <Text style={styles.travelTimeText}>{flight.departureTime}</Text>
            <Text style={styles.travelTimeText}>{flight.arrivalTime}</Text>
          </View>
        </View>
        <View style={[styles.tabLeft, isFocused && styles.focusedTab]}></View>
        <View style={[styles.tabRight, isFocused && styles.focusedTab]}></View>
      </View>
    </View>
  );
};

const FlightDate = ({icon, date}) => (
  <View style={styles.flightDate}>
    <IconT name={icon} size={buttonSizes.iconSize} color="#6b7280" />
    <Text style={styles.dateText}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  boardingPass: {
    marginHorizontal: spacing.ten * 2,
    marginVertical: spacing.ten / 2,
    borderRadius: spacing.medium,
    paddingVertical: spacing.small * 3,
    paddingHorizontal: spacing.large,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: spacing.one,
    position: 'relative',
  },
  focusedCard: {
    width: spacing.container,
  },
  card: {
    marginBottom: spacing.ten,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: spacing.hundred / 2,
    height: spacing.hundred / 2,
    resizeMode: 'contain',
    marginLeft: -spacing.ten,
  },
  companyNameText: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
  },
  flightDuration: {
    borderWidth: spacing.one,
    borderColor: colors.orange,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.ten,
    borderRadius: spacing.ten,
    backgroundColor: colors.buttonBackground,
  },
  flightDurationText: {
    color: colors.red,
    fontWeight: typography.fontWeight.medium,
  },
  flightDates: {
    paddingVertical: spacing.ten,
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
    marginBottom: spacing.ten / 2,
  },
  flightPath: {
    alignItems: 'center',
  },
  dashedLine: {
    borderStyle: 'dashed',
    position: 'absolute',
    alignSelf: 'center',
    top: spacing.ten / 2,
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
  tabLeft: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: spacing.medium,
    height: spacing.medium * 2,
    borderTopLeftRadius: spacing.xLarge,
    borderBottomLeftRadius: spacing.xLarge,
    borderLeftWidth: spacing.one,
    borderTopWidth: spacing.one,
    borderBottomWidth: spacing.one,
    borderColor: colors.lightGray,
    bottom: spacing.ultra,
    right: -spacing.quarter,
    zIndex: spacing.ten,
  },
  tabRight: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: spacing.medium,
    height: spacing.medium * 2,
    borderTopRightRadius: spacing.xLarge,
    borderBottomRightRadius: spacing.xLarge,
    borderRightWidth: spacing.one,
    borderTopWidth: spacing.one,
    borderBottomWidth: spacing.one,
    borderColor: colors.lightGray,
    bottom: spacing.ultra,
    left: -spacing.quarter,
    zIndex: spacing.ten,
  },
  focusedTab: {
    backgroundColor: colors.transparentBackground,
  },
});

export default FlightCard;
