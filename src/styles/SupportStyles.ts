import { StyleSheet, Dimensions } from 'react-native';
import colors from '../const/colors';

const { width } = Dimensions.get('window');

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  listContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },

  card: {
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor:colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
export default styles;