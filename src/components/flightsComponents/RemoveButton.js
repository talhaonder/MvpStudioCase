import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../../style';

const RemoveButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Remove Flight</Text>
    </TouchableOpacity>
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
    display: 'flex',
    height: 45,
    width: 370,
    backgroundColor: colors.removeBackground,
    borderRadius: 15,
  },
  buttonText: {
    color: colors.removeColor,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default RemoveButton;
