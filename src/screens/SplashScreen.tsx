import React, { useEffect } from 'react';
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import styles from '../styles/splashStyles';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // change to your target screen
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/imgbg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default SplashScreen;
