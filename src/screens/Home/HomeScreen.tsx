import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';

import styles from '../../styles/HomeStyles';
import CategoryCard from '../../components/CategoryCard';
import GhatCard from '../../components/GhatCard';
import { useNavigation } from '@react-navigation/native';
interface Category {
  id: number;
  title: string;
  image: any; // require() images
}

interface Ghat {
  id: number;
  name: string;
  image: any;
}
const categories = [
  { id: 1, title: 'Normal', image: require('../../../assets/images/category.png') },
  { id: 2, title: 'Bajara', image: require('../../../assets/images/category2.png') },
  { id: 3, title: 'Cruise', image: require('../../../assets/images/category3.png') },
  { id: 4, title: 'Luxury', image: require('../../../assets/images/category4.png') },
];

const ghats = [
  {
    id: 1,
    name: 'Dashashwamedh Ghat',
    image: require('../../../assets/images/image1.png'),
  },
  {
    id: 2,
    name: 'Manikarnika Ghat',
    image: require('../../../assets/images/image2.png'),
  },
  {
    id: 3,
    name: 'Assi Ghat Varanasi',
    image: require('../../../assets/images/image.png'),
  },
];

const HomeScreen = () => {
    const navigation=useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}   contentContainerStyle={{ paddingBottom: 0 }} >
      
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Welcome Sanjay</Text>

      {/* BANNER */}
     <ImageBackground
  source={require('../../../assets/images/boatbg.png')}
  style={styles.bannerCard}
 // optional: for rounded corners, opacity, etc.
>
        <Image
          source={require('../../../assets/images/boat.png')}
          style={styles.bannerIcon}
        />
        <Text style={styles.bannerText}>Book Your Boat Today !!!</Text>
      </ImageBackground>

      {/* CATEGORIES */}
      <Text style={styles.sectionTitle}>Category's to explore</Text>

    <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 16 }}
>
  <View style={styles.filterGrey}>
    <Text style={styles.filterGreyText}>Filter:</Text>
  </View>

  <View style={styles.filterActive}>
    <Text style={styles.filterActiveText}>Sharing</Text>
  </View>

  <View style={styles.filterInactive}>
    <Text style={styles.filterInactiveText}>Full Boat</Text>
  </View>

 
 
</ScrollView>

    <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
>
  {categories.map((item: Category, index) => (
    <CategoryCard
      key={item.id}
      item={{ ...item, id: item.id.toString() }}
      style={{ marginRight: index === categories.length - 1 ? 0 : 12 }}
      onPress={()=> navigation.navigate('BoatBookingScreen'as never)}
    />
  ))}
</ScrollView>


      {/* GHATS */}
      <Text style={styles.sectionTitle}>Ghats to board</Text>

      <View style={styles.ghatRow}>
     <FlatList
  data={ghats.map((item) => ({ ...item, id: item.id.toString() }))} // ensure id is string
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 0 }}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <GhatCard item={item}  />}
  
/>

      </View>

  
      <ImageBackground
        source={require('../../../assets/images/footerimg.png')}
        style={styles.footerBg}
      />
    </ScrollView>
  );
};

export default HomeScreen;
