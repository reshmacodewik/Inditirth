import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../styles/HomeStyles';

export interface GhatItem {
  id: string; // use string for consistency with React keys
  name: string;
  image: ImageSourcePropType;
}

interface GhatCardProps {
  item: GhatItem;
}

const GhatCard: React.FC<GhatCardProps> = ({ item }) => {
  return (
    <View style={[styles.ghatCard, { marginRight: 12 }]}>
      <Image source={item.image} style={styles.ghatImage} />
      <Text style={styles.ghatText}>{item.name}</Text>
    </View>
  );
};

export default GhatCard;
