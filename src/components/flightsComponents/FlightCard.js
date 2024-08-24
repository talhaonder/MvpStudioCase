import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconT from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/logo/Turkish-Airlines.png';
import {colors} from '../../style';
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
              <Icon name="airplane-outline" size={32} color="black" />
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
    <IconT name={icon} size={28} color="#6b7280" />
    <Text style={styles.dateText}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  boardingPass: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    position: 'relative',
  },
  focusedCard: {
    width: 370,
  },
  card: {
    marginBottom: 10,
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
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: -10,
  },
  companyNameText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  flightDuration: {
    borderWidth: 0.5,
    borderColor: 'orange',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.buttonBackground,
  },
  flightDurationText: {
    color: colors.red,
    fontWeight: '500',
  },
  flightDates: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flightDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    color: colors.gray,
    marginLeft: 4,
  },
  cardBody: {
    marginBottom: 10,
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.black,
    marginBottom: 5,
  },
  flightPath: {
    alignItems: 'center',
  },
  dashedLine: {
    borderStyle: 'dashed',
    position: 'absolute',
    alignSelf: 'center',
    top: 5.4,
    width: 80,
    zIndex: -1,
    letterSpacing: 5,
  },
  travelTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  travelTimeText: {
    color: colors.timeColor,
    fontWeight: '500',
  },
  tabLeft: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: 16,
    height: 30,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    bottom: 60,
    right: -25,
    zIndex: 10,
  },
  tabRight: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: 16,
    height: 30,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    bottom: 60,
    left: -25,
    zIndex: 10,
  },
  focusedTab: {
    backgroundColor: colors.transparentBackground,
  },
});

export default FlightCard;
