import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import { wp, hp } from '../Responsive/responsive';
import styles from './style/HeaderStyles';

interface HeaderProps {
  onProfilePress?: () => void;
  onLogout?: () => void;
  onProfile?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onProfile }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Menu Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        {/* Overlay */}
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}
        >
          {/* Menu Card */}
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                onProfile?.();
              }}
            >
              <Text style={styles.menuText}>My Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                onLogout?.();
              }}
            >
              <Text style={[styles.menuText, { color: 'red' }]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Header;
