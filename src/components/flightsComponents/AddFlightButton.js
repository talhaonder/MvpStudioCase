import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class AddFlightButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add Flight</Text>
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
    width: 100,
    backgroundColor: '#ea580c',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
