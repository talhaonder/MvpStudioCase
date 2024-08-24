import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconThird from 'react-native-vector-icons/EvilIcons';

// Ekranlarınızı import edin
import FlightsScreen from '../screens/FlightsScreen';
import PlansScreen from '../screens/PlansScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {colors} from '../style';

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
              return <IconThird name="user" size={36} color={color} />;
            }
          },
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
          headerShown: false, // Tüm ekranlar için header'ı gizler

          tabBarStyle: {
            paddingBottom: 20, // Alt tab barın alta uzaklığı
            height: 70, // Alt tab barın yüksekliği
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
