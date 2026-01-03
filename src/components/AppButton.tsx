import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle, Pressable } from 'react-native';
import styles from './style/AppButtonstyles';


interface AppButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  style,
}) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;
