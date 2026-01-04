import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OtpScreen from '../screens/auth/OtpScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import BottomTabNavigator from './BottomTabNavigator';
import BoatBookingScreen from '../screens/BoatBookingScreen';
import BookingSummaryScreen from '../screens/Booking/BookingSummaryScreen';
import BookingConfirmedScreen from '../screens/Booking/BookingConfirmedScreen';
import MyProfileScreen from '../screens/MyProfileScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Otp: undefined;
  Signup: undefined;
  Home: undefined;
  BoatBookingScreen: undefined;
  BookingSummary: undefined;
  Confirmed: undefined;
  Profile: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="BoatBookingScreen" component={BoatBookingScreen} />
      <Stack.Screen name="BookingSummary" component={BookingSummaryScreen} />
      <Stack.Screen name="Confirmed" component={BookingConfirmedScreen} />
      <Stack.Screen name="Profile" component={MyProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
