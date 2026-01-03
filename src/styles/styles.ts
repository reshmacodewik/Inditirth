import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EE',
    justifyContent: 'center',
  },

  centerContent: {
    alignItems: 'center',
    marginBottom: height * 0.15,
  },

  confirmIcon: {
    width: width * 0.22,
    height: width * 0.22,
    marginBottom: 16,
  },

  confirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
export default styles;