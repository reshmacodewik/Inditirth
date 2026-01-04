import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/BookingScreenStyles';

const DATA = [
  {
    id: '1',
    title: 'Simple Motor Boat',
    location: 'Dashashwamedh Ghat',
    dateTime: '20 Nov, 2025 at 10:30 AM',
    day: '25',
    month: 'NOV',
    year: '2025',
    status: 'Confirmed',
  },
  {
    id: '2',
    title: 'Simple Motor Boat',
    location: 'Dashashwamedh Ghat',
    dateTime: '20 Nov, 2025 at 10:30 AM',
    day: '25',
    month: 'NOV',
    year: '2025',
    status: 'Confirmed',
  },
];

const MyBookingScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={require('../../../assets/images/ticket.png')}
      style={styles.card}
      imageStyle={styles.cardImage}
    >
      {/* LEFT */}
      <View style={styles.leftSection}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>

        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>

        <Text style={styles.label}>Date & Time</Text>
        <Text style={styles.dateText}>{item.dateTime}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>

      {/* RIGHT */}
      <View style={styles.rightSection}>
        <Text style={styles.month}>{item.month}</Text>
        <Text style={styles.day}>{item.day}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={18} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Booking</Text>
      </View>

      {/* TABS */}
      <View style={styles.tabRow}>
        <TouchableOpacity onPress={() => setActiveTab('upcoming')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'upcoming' && styles.activeTab,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('past')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'past' && styles.activeTab,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.indicatorWrapper}>
        <View
          style={[
            styles.tabIndicator,
            { marginLeft: activeTab === 'upcoming' ? '0%' : '50%' },
          ]}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyBookingScreen;
