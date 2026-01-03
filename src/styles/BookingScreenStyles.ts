import { StyleSheet, Dimensions } from 'react-native';
import colors from '../const/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  tabText: {
    fontSize: 16,
    color: '#999',
    paddingBottom: 8,
  },

  activeTab: {
    color: '#FF7A00',
    fontWeight: '600',
  },
 indicatorWrapper: {
    height: 2,
    backgroundColor: '#E5E7EB',
    width: '90%',
    marginHorizontal:25
    
  },
  tabIndicator: {
    height: 2,
    backgroundColor: '#FF7A00',
    width: width * 0.5,
    marginLeft: width * 0.05,
    marginBottom: 10,
  },

  listContent: {
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    height: 180,
    marginBottom: 16,
    padding: 16,
  },

  cardImage: {
    resizeMode: 'stretch',
  },

  leftSection: {
    flex: 3,
    justifyContent: 'space-between',
  },

  rightSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusBadge: {
    backgroundColor: '#DFF5E7',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  statusText: {
    color: '#1C9C5E',
    fontSize: 12,
    fontWeight: '600',
  },

  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF7A00',
    marginTop: 6,
  },

  location: {
    fontSize: 11,
    color: '#444',
    marginTop: 4,
  },

  label: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 6,
  },

  dateText: {
    fontSize: 11,
    color: '#444',
  },

  button: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },

  buttonText: {
    fontSize: 12,
    fontWeight: '500',
  },

  month: {
    fontSize: 18,
    fontWeight: '700',
  },

  day: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FF7A00',
  },

  year: {
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;