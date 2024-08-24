import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, spacing, typography} from '../../style';

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
    height: spacing.mega,
    width: spacing.container,
    backgroundColor: colors.removeBackground,
    borderRadius: spacing.medium,
  },
  buttonText: {
    color: colors.removeColor,
    fontSize: typography.fontSize.description,
    fontWeight: typography.fontWeight.medium,
  },
});
export default RemoveButton;
