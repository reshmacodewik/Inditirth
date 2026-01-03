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
             Signup to create new account
            </Text>

            <Text style={styles.labelname}>Full Name</Text>

            <TextInput
              style={styles.inputname}
              placeholderTextColor="#999"
            />

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

export default SignupScreen;
