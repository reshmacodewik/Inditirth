import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';


const BookingConfirmedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require('../../../assets/images/Success.png')} // your tick image
          style={styles.confirmIcon}
          resizeMode="contain"
        />
        <Text style={styles.confirmText}>
          Your booking is confirmed
        </Text>
      </View>
    </View>
  );
};

export default BookingConfirmedScreen;
