import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/MyProfileStyles';


const MyProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={14} color="#111" />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Ethan Carter</Text>
        <Text style={styles.phone}>+91 639 258 3695</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value=""
          placeholder='3'
          editable={false}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value=""
          placeholder='3'
          editable={false}
        />

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyProfileScreen;
