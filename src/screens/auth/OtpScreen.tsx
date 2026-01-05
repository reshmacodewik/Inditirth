import React, { useRef, useState } from 'react';
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
import AppButton from '../../components/AppButton';
import styles from '../../styles/otpStyles';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);
  const navigation = useNavigation();

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

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

            <Text style={styles.subtitle}>Sent OTP at +91 xxx xxx x32</Text>

            {/* OTP Boxes */}
            <View style={styles.otpRow}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  autoFocus={false}
                  ref={ref => {
                    inputs.current[index] = ref;
                  }}
                  style={styles.otpInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={value}
                  onChangeText={text => handleChange(text, index)}
                  onKeyPress={({ nativeEvent }) =>
                    handleBackspace(nativeEvent.key, index)
                  }
                />
              ))}
            </View>

            <AppButton
              title="Done"
              onPress={() => navigation.navigate('Signup' as never)}
            />

            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Don’t Receive OTP ?</Text>
              <TouchableOpacity>
                <Text style={styles.resendLink}> Resent OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Footer Image */}
        <ImageBackground
          source={require('../../../assets/images/footerimg.png')}
          style={styles.footerBg}
          resizeMode="cover"
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
