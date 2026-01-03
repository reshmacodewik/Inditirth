import { StyleSheet, Dimensions } from 'react-native';
import colors from '../const/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  topContainer: {
    alignItems: 'center',
    paddingTop: height * 0.08,
    paddingBottom: 40,
  },

  logo: {
    width: width * 0.35,
    height: width * 0.35,
    marginBottom: 20,
  },

  card: {
    width: width * 0.9,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#00000014',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },

  highlight: {
    color: colors.btncolor,
  },

  subtitle: {
    textAlign: 'center',
    color: colors.black,
    marginVertical: 0,
    fontWeight: '500',
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  otpInput: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: 14,
    backgroundColor: colors.grey,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },

  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },

  resendText: {
    color: colors.black,
  },

  resendLink: {
    color: colors.btncolor,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

 footerBg: {
  position: 'absolute',
  bottom: 0,
  width: width,
  height: height * 0.45,
  pointerEvents: 'none', 
},
});

export default styles;
