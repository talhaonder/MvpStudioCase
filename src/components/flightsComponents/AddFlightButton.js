import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../style';
const AddFlightButton = ({onAddFlight}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onAddFlight}>
        <Text style={styles.buttonText}>Add Flight</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 100,
    backgroundColor: colors.orange,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AddFlightButton;
