// src/navigation/StackNavigator.tsx
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
  Profile:undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />

      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="BoatBookingScreen" component={BoatBookingScreen} />
      <Stack.Screen name="BookingSummary" component={BookingSummaryScreen} />
      <Stack.Screen name="Confirmed" component={BookingConfirmedScreen} />
      <Stack.Screen name="Profile" component={MyProfileScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
// const StackNavigator = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       // Replace this with real auth logic
//       const token = await AsyncStorage.getItem('userToken');
//       setIsLoggedIn(!!token);
//     };
//     checkAuth();
//   }, []);

//   if (isLoggedIn === null) {
//     return <SplashScreen />; // show splash while checking auth
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isLoggedIn ? (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Otp" component={OtpScreen} />
//           <Stack.Screen name="Signup" component={SignupScreen} />
//         </>
//       ) : (
//         <Stack.Screen name="Home" component={BottomTabNavigator} />
//       )}
//     </Stack.Navigator>
//   );
// };
