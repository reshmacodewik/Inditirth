import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/SupportStyles';


const SupportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Options */}
      <View style={styles.listContainer}>
        <SupportItem
          icon="logo-whatsapp"
          iconColor="#25D366"
          title="WhatsApp"
        />
        <SupportItem
          icon="call-outline"
          iconColor="#F97316"
          title="Call"
        />
        <SupportItem
          icon="mail-outline"
          iconColor="#F97316"
          title="Email Address"
        />
        <SupportItem
          icon="globe-outline"
          iconColor="#F97316"
          title="Visit us at our Website"
        />
      </View>
    </SafeAreaView>
  );
};

const SupportItem = ({ icon, iconColor, title }: any) => (
  <Pressable style={styles.card}>
    <View style={styles.cardLeft}>
      <Ionicons name={icon} size={22} color={iconColor} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#000" />
  </Pressable>
);

export default SupportScreen;
