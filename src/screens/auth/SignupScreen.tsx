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
import styles from '../../styles/SignStyle';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? 'padding' : undefined}
    >
      <ImageBackground
        source={require('../../../assets/images/imgbg.png')}
        style={styles.mainContainer}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={styles.topContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.card}>
            <Text style={styles.title}>
              Welcome to <Text style={styles.highlight}>Inditirth Boat</Text>
            </Text>

            <Text style={styles.subtitle}>Signup to create new account</Text>

            <Text style={styles.labelname}>Full Name</Text>

            <TextInput style={styles.inputname} placeholderTextColor="#999" />

            <Text style={styles.label}>Phone Number</Text>

            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholderTextColor="#999"
            />
            <AppButton
              title="Signup"
              onPress={() => {
                console.log('Signup pressed');
                navigation.navigate('Home' as never);
              }}
            />

            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Already have account?</Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
