import { StyleSheet, Dimensions } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import colors from '../const/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  profileIcon: {
   
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },

  userIcon: {
    width: 40,
    height: 40,

  },

  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  bannerCard: {
    
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
   
  },

  bannerIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  bannerText: {
    fontSize: 16,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom:10
  },

  filterRow: {
    flexDirection: 'row',
   
    marginTop: 10,
    alignItems: 'center',
  },

  filterGrey: {
    backgroundColor: colors.darkgrey,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal:30
  },

  filterGreyText: {
    color: colors.white,
    fontSize:16,
    fontWeight:'700'
  },
filterList: {
  paddingHorizontal: 6,   // left space
  paddingRight: 28,        // 👈 right-end scroll space
},

  filterActive: {
    borderColor: '#FF7A00',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal:30,
    backgroundColor:'#FFE0C5'
  },

  filterActiveText: {
    color: colors.black,
    fontSize:16,
    fontWeight:'700'

  },

  filterInactive: {
    borderColor: '#1E1E1E61',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal:20
  },

  filterInactiveText: {
    color: colors.black,
    fontSize:16,
    fontWeight:'700'
  },

  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
  },

  categoryCard: {
    width: width * 0.42,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FF7A00',
  },

  categoryImage: {
    width: '100%',
    height: 90,
    borderRadius: 10,
  },

  categoryText: {
    marginTop: 8,
    fontWeight: '600',
  },

  ghatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
   
    
  },

  ghatCard: {
    width: width * 0.40,
    backgroundColor: colors.grey,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    rowGap:10
   
  },

  ghatImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop:10
  },

  ghatText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    marginHorizontal:8
  },

  footerBg: {
    width: '100%',
    height: 120,
    marginTop: 30,
  },
});
export default styles;