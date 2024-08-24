import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {buttonSizes, colors, spacing, typography} from '../../style';

const Header = ({onAddFlight}) => {
  // Use prop instead of context
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flights</Text>
      <Icon
        name="plus"
        size={buttonSizes.defaultHeight}
        color={colors.black}
        onPress={onAddFlight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.large,
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: typography.fontSize.header,
    fontWeight: typography.fontWeight.bold,
    color: colors.black,
  },
});

export default Header;
