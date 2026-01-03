
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
      navigation.replace('Login'); // change to your screen
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')} // your image
        style={styles.logo}
        resizeMode="contain"
      />
        <ImageBackground
        source={require('../../assets/images/footerimg.png')} // your footer image
        style={styles.footerBg}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;


