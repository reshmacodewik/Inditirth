import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from '../../styles/LoginStyles';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
      const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? 'padding' : undefined}
    >
      <View style={styles.mainContainer}>
        {/* WHITE TOP SECTION */}
        <ScrollView
          contentContainerStyle={styles.topContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.title}>
              Welcome to <Text style={styles.highlight}>Inditirth Boat</Text>
            </Text>

            <Text style={styles.subtitle}>
              Log In to access your account
            </Text>

            <Text style={styles.label}>Phone Number</Text>

            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholderTextColor="#999"
            />
          <AppButton
  title="Get OTP"
  onPress={() => {
    console.log('Get OTP pressed');
    navigation.navigate('Otp' as never);
  }}
/>



          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Create New Account?</Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}> SignUp</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>

        {/* PINK FOOTER SECTION */}
       <ImageBackground
        source={require('../../../assets/images/footerimg.png')} // your footer image
        style={styles.footerBg}
        resizeMode="cover"
      />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
