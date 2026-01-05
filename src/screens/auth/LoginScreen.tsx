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
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles/LoginStyles';
import AppButton from '../../components/AppButton';

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        source={require('../../../assets/images/imgbg.png')}
        style={styles.mainContainer}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={styles.topContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
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
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter phone number"
              placeholderTextColor="#999"
            />

            <AppButton
              title="Get OTP"
              onPress={() => navigation.navigate('Otp')}
            />

            <View style={styles.signupRow}>
              <Text style={styles.signupText}>
                Create New Account?
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
              >
                <Text style={styles.signupLink}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
