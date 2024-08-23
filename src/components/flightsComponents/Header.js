import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flights</Text>
      <Icon name="plus" size={30} color={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#fff',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 34,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
