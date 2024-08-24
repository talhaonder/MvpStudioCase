import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../style';

const Header = ({onAddFlight}) => {
  // Use prop instead of context
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flights</Text>
      <Icon name="plus" size={30} color={colors.black} onPress={onAddFlight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
