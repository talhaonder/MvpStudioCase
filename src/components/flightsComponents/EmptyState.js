import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {buttonSizes, colors, spacing, typography} from '../../style';
const EmptyState = ({onAddTwoWay}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="plane" size={buttonSizes.defaultHeight} color={'black'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Not Flights Added Yet</Text>
        <Text style={styles.descriptionText}>
          Let's get started on your jet lag plan! Add your upcoming flights to
          begin your journey.
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onAddTwoWay}>
          <Text style={styles.buttonText}>Add Flight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: spacing.quarter,
  },
  iconContainer: {
    alignItems: 'center',
    borderWidth: spacing.one,
    padding: spacing.small * 2,
    borderRadius: spacing.medium,
    borderColor: colors.lightGray,
    marginBottom: spacing.ten * 2,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: spacing.ten / 2,
  },
  headerText: {
    textAlign: 'center',
    fontSize: typography.fontSize.xLarge,
    marginBottom: spacing.thin * 2,
    fontWeight: 'bold',
    color: colors.black,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: typography.fontSize.description,
    color: colors.littleTextColor,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: spacing.mega,
    width: spacing.hundred,
    backgroundColor: colors.addBackground,
    borderRadius: spacing.ten,
  },
  buttonText: {
    color: colors.white,
    fontSize: spacing.medium,
    fontWeight: typography.fontWeight.medium,
  },
});

export default EmptyState;
