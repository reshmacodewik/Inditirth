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
  {
    id: 1,
    title: 'Normal',
    image: require('../../../assets/images/category.png'),
  },
  {
    id: 2,
    title: 'Bajara',
    image: require('../../../assets/images/category2.png'),
  },
  {
    id: 3,
    title: 'Cruise',
    image: require('../../../assets/images/category3.png'),
  },
  {
    id: 4,
    title: 'Luxury',
    image: require('../../../assets/images/category4.png'),
  },
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
const FILTERS = [
  { id: 'filter', label: 'Filter :', type: 'grey' },
  { id: 'sharing', label: 'Sharing', type: 'active' },
  { id: 'full', label: 'Full Boat', type: 'inactive' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 0 }}
    >
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
      <View style={styles.ghatRow}>
        <FlatList
          horizontal
          data={FILTERS}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 0 }} />}
          renderItem={({ item }) => {
            if (item.type === 'grey') {
              return (
                <View style={styles.filterGrey}>
                  <Text style={styles.filterGreyText}>{item.label}</Text>
                </View>
              );
            }

            if (item.type === 'active') {
              return (
                <View style={styles.filterActive}>
                  <Text style={styles.filterActiveText}>{item.label}</Text>
                </View>
              );
            }

            return (
              <View style={styles.filterInactive}>
                <Text style={styles.filterInactiveText}>{item.label}</Text>
              </View>
            );
          }}
        />{' '}
      </View>

      <View style={styles.ghatRow}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          renderItem={({ item }) => (
            <CategoryCard
              item={item}
              onPress={() => navigation.navigate('BoatBookingScreen' as never)}
            />
          )}
        />
      </View>

      {/* GHATS */}
      <Text style={styles.sectionTitle}>Ghats to board</Text>

      <View style={styles.ghatRow}>
        <FlatList
          data={ghats.map(item => ({ ...item, id: item.id.toString() }))} // ensure id is string
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <GhatCard item={item} />}
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
