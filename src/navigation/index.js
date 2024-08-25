import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconThird from 'react-native-vector-icons/EvilIcons';

// Ekranları import ediyorum
import FlightsScreen from '../screens/FlightsScreen';
import PlansScreen from '../screens/PlansScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {buttonSizes, colors, spacing} from '../style';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Flights"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            if (route.name === 'Flights') {
              return <Icon name="plane" size={size} color={color} />;
            } else if (route.name === 'Plans') {
              return <Icon name="event" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return (
                <IconThird
                  name="user"
                  size={buttonSizes.defaultHeight}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
          headerShown: false, // Tüm ekranlar için header'ı gizler

          tabBarStyle: {
            paddingBottom: spacing.ten * 2, // Alt tab barın alta uzaklığı
            height: spacing.ten * 7, // Alt tab barın yüksekliği
          },
        })}>
        <Tab.Screen name="Plans" component={PlansScreen} />
        <Tab.Screen name="Flights" component={FlightsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
