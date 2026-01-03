import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../styles/BookingStyles';
import { wp } from '../Responsive/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../const/colors';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
const dates = [
  { day: '19', label: 'MON' },
  { day: '20', label: 'SUN' },
  { day: '21', label: 'TUE' },
  { day: '22', label: 'WED' },
  { day: '23', label: 'THU' },
];

const times = [
  ['3:20 PM', '6:20 PM', '6:20 PM'],
  ['3:20 PM', '6:20 PM', '6:20 PM'],
  ['3:20 PM', '6:20 PM', '6:20 PM'],
];
const ghats = [
  { label: 'Ghat 1', value: '1' },
  { label: 'Ghat 2', value: '2' },
  { label: 'Ghat 3', value: '3' },
];

const BoatBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [selectedGhat, setSelectedGhat] = useState<string | null>(null);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <Header onProfile={() => navigation.navigate('Profile' as never)} />

      {/* Boat Image */}
      <Image
        source={require('../../assets/images/boat1.png')}
        style={styles.boatImage}
      />

      {/* Boat Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.boatTitle}>Simple Motor Boat</Text>
        <View style={styles.capacityRow}>
          <Feather name="users" size={wp(4)} color={colors.btncolor} />
          <Text style={styles.capacityText}>12 Person Capacity</Text>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur. Duis ultricies auctor risus
          praesent nisi id a nisi.
        </Text>

        <Text style={styles.sectionTitle}>What's included</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur. Duis ultricies auctor risus
          praesent nisi id a nisi. Lorem ipsum dolor sit amet consectetur. Duis
          ultricies auctor risus praesent nisi id a nisi.
        </Text>

        {/* Form */}
        <Text style={styles.sectionTitle}>Fill out Details</Text>
        <View style={styles.divider} />

        <Text style={styles.inputLabel}>Choose Your Ghats</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownSelectedText}
          data={ghats}
          labelField="label"
          valueField="value"
          placeholder="Choose"
          value={selectedGhat}
          onChange={item => setSelectedGhat(item.value)}
        />

        <Text style={styles.inputLabelperson}>Number of Person</Text>
        <TextInput style={styles.input} keyboardType="numeric" />

        <Text style={styles.inputLabel}>Select Your Date</Text>
        <FlatList
          data={dates}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedDate(index)}
              style={[
                styles.dateBox,
                selectedDate === index && styles.dateBoxSelected,
              ]}
            >
              {/* DAY */}
              <Text
                style={[
                  styles.dayText,
                  selectedDate === index && styles.dateTextSelected,
                ]}
              >
                {item.day}
              </Text>

              {/* LABEL */}
              <Text
                style={[
                  styles.labelText,
                  selectedDate === index && styles.dateTextSelected,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.inputLabel}>Pick Your Time slot</Text>
        {times.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.timeRow}>
            {row.map((time, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                onPress={() =>
                  setSelectedTime({ row: rowIndex, col: colIndex })
                }
                style={[
                  styles.timeBox,
                  selectedTime?.row === rowIndex &&
                    selectedTime?.col === colIndex &&
                    styles.timeBoxSelected,
                  colIndex !== row.length - 1 && { marginRight: wp(2) },
                ]}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime?.row === rowIndex &&
                      selectedTime?.col === colIndex &&
                      styles.timeTextSelected,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.navButtons}>
          {/* Previous */}
          <View style={styles.navItem}>
            <TouchableOpacity style={styles.navButton}>
              <MaterialIcons name="arrow-back-ios" size={wp(4)} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.navButtonText}>Previous</Text>
          </View>

          {/* Next */}
          <View style={styles.navItem}>
            <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('BookingSummary'as never)}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={wp(4)}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={styles.navButtonText}>Next</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={require('../../assets/images/footerimg.png')}
        style={styles.footerBg}
      />
    </ScrollView>
  );
};

export default BoatBookingScreen;
