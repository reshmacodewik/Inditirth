import { StyleSheet, Dimensions } from 'react-native';
import colors from '../const/colors';

const { width, height } = Dimensions.get('window');

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 999,
  },

  editIcon: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: '#F3F4F6',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },

  phone: {
    marginTop: 4,
    fontSize: 14,
    color: '#6B7280',
  },

  form: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 12,
    color: '#111',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: '#111',
    marginBottom: 16,
  },

  editBtn: {
    backgroundColor: '#16A34A',
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 0,
  },

  editBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;