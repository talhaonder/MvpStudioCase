import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class RemoveButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Remove Flight</Text>
        </View>
      </View>
    );
  }
}

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
    backgroundColor: '#fee2e2',
    borderRadius: 15,
  },
  buttonText: {
    color: '#7f1d1d',
    fontSize: 16,
    fontWeight: '500',
  },
});
