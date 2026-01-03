import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import colors from '../const/colors';
import MyBookingScreen from '../screens/Booking/BookingScreen';
import SupportScreen from '../SupportScreen';


export type BottomTabParamList = {
  Home: undefined;
  MyBooking: undefined;
  Support: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.btncolor,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: { height: 90, paddingBottom: 10,paddingTop:10,borderTopWidth:0,elevation:0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/icons/Home.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyBooking"
        component={MyBookingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/icons/Tag.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/icons/Phone call.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
