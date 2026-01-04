import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import styles from '../../styles/BookingsummaryStyles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../const/colors';
import { useNavigation } from '@react-navigation/native';

const BookingSummaryScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Header onProfile={()=>navigation.navigate('Profile'as never)} />

      {/* Title */}
      <View style={styles.titleRow}>
        <MaterialIcons name="arrow-back-ios" size={18} />
        <Text style={styles.title}>Booking Summary</Text>
      </View>

      {/* Activity Card */}
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.cardTitle}>Your Activity</Text>
          <Image
            source={require('../../../assets/images/boat.png')}
            style={styles.bannerIcon}
          />
        </View>

        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.activityName}>Simple Motor Boat</Text>

            <View style={styles.row}>
              <MaterialIcons name="location-on" size={16} />
              <Text style={styles.locationText}>Dashashwamedh Ghat</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Ride Details */}
      <View style={styles.card}>
        <View style={styles.cardRide}>
          <Feather name="clipboard" size={15} color={colors.btncolor} />
          <Text style={styles.cardTitle}>Your Ride Details</Text>
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.label}>Person</Text>
          <Text style={styles.editText}>Edit</Text>
        </View>
        <Text style={styles.value}>5</Text>

        <View style={styles.cardHeader}>
          <Text style={styles.label}>Date & Time</Text>
          <Text style={styles.editText}>Edit</Text>
        </View>
        <Text style={styles.value}>20 Nov, 2025 at 10:30 AM</Text>

        <Text style={styles.label}>Boat Type</Text>
        <Text style={styles.value}>Sharing</Text>
      </View>

      {/* Price */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>₹ Total Price</Text>

        <View style={styles.priceRow}>
          <Text style={styles.labeltotal}>Subtotal</Text>
          <Text style={styles.value}>₹300.00</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.labeltax}>Taxes & Fees</Text>
          <Text style={styles.valuetax}>₹50.00</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.totalText}>₹300.00</Text>
        </View>
      </View>

      {/* Coupon */}
      <View style={styles.card}>
        <View style={styles.cardRide}>
          <Feather name="percent" size={14} color={colors.btncolor} />
          <Text style={styles.cardTitle}> Referral / Coupon Code</Text>
        </View>
        <TextInput
          placeholder="Enter code"
          style={styles.couponInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* Pay Button */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('Confirmed' as never)}
      >
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookingSummaryScreen;
