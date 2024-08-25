import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, spacing, typography} from '../../style';
import Logo from '../../assets/logo/Turkish-Airlines.png';

const FlightHeader = ({flight}) => (
  <View style={styles.cardHeader}>
    <View style={styles.companyInfo}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.companyNameText}>
        {flight.flightNumber} · {flight.airline}
      </Text>
    </View>
    <View style={styles.flightDuration}>
      <Text style={styles.flightDurationText}>{flight.flightDuration}</Text>
    </View>
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
});

export default FlightHeader;
