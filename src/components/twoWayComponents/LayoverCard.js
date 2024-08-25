import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, spacing, typography} from '../../style';
import IconT from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/logo/Turkish-Airlines.png';

const LayoverCard = ({flight}) => (
  <>
    <View style={styles.cardHeader}>
      <View style={styles.companyInfo}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.companyNameText}>
          {flight.flightNumber} · {flight.airline}
        </Text>
      </View>
      <View style={styles.flightDuration}>
        <Text style={styles.flightDurationText}>
          {flight.layoverFlightDuration}
        </Text>
      </View>
    </View>
    <View style={styles.flightDates}>
      <FlightDate
        icon="arrow-top-right-thin-circle-outline"
        date={flight.layoverDepartureDate}
      />
      <FlightDate
        icon="arrow-bottom-right-thin-circle-outline"
        date={flight.layoverArrivalDate}
      />
    </View>
    <View style={styles.cardBody}>
      <View style={styles.flightDetails}>
        <Text style={styles.cityText}>{flight.arrivalCity}</Text>
        <View style={styles.flightPath}>
          <View style={styles.pathLineContainer}>
            <Text style={styles.dashedLine}>
              --- {''} {''} ---
            </Text>
            <Icon name="airplane-outline" size={32} color="black" />
          </View>
        </View>
        <Text style={styles.cityText}>{flight.layoverCity}</Text>
      </View>
      <View style={styles.travelTimes}>
        <Text style={styles.travelTimeText}>{flight.layoverDepartureTime}</Text>
        <Text style={styles.travelTimeText}>{flight.layoverArrivalTime}</Text>
      </View>
    </View>
  </>
);

const FlightDate = ({icon, date}) => (
  <View style={styles.flightDate}>
    <IconT name={icon} size={32} color="#6b7280" />
    <Text style={styles.dateText}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
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
    fontWeight: typography.fontWeight.bold,
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
    flex: spacing.one,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pathLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
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

export default LayoverCard;
