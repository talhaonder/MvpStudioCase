import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, spacing} from '../../style';

const FlightTabs = ({isFocused}) => (
  <>
    <View style={[styles.tabLeft, isFocused && styles.focusedTab]}></View>
    <View style={[styles.tabRight, isFocused && styles.focusedTab]}></View>
  </>
);

const styles = StyleSheet.create({
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
    right: -spacing.half,
    zIndex: spacing.ten,
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
    zIndex: spacing.ten,
  },
  focusedTab: {
    backgroundColor: colors.transparentBackground,
  },
});

export default FlightTabs;
