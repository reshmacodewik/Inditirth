import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import colors from '../const/colors';


export interface CategoryItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}


interface CategoryCardProps {
  item: CategoryItem;
  onPress?: () => void;
}


const CategoryCard: React.FC<CategoryCardProps & { style?: any }> = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card,{marginRight:0}, style]}
      onPress={onPress}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};


export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: 115,
    borderRadius: 12,
    borderWidth:1,
    borderColor:colors.btncolor,
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 12,
    height:145

  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 8,
    
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
});
