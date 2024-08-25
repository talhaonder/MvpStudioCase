import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {buttonSizes, colors, spacing, typography} from '../../style';

const Header = ({onAddFlight}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flights</Text>
      {/* Uçuş eklemek için kullanılan buton. onPress olayında onAddFlight fonksiyonunu çağırır. */}
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
