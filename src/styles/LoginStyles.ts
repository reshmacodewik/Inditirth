import { StyleSheet, Dimensions } from 'react-native';
import colors from '../const/colors';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
   
  },

  /* TOP WHITE AREA */
  topContainer: {
    alignItems: 'center',
    paddingTop: height * 0.18,
    paddingBottom: 30,
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
    borderWidth:1,
    borderColor:'#00000014'

  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop:15
  },

  highlight: {
    color: colors.btncolor,
  },

  subtitle: {
    textAlign: 'center',
    color: colors.black,
    marginVertical: 10,
    fontWeight:'500'
  },

  label: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '600',
    fontSize:15
  },

  input: {
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.grey,
    paddingHorizontal: 15,
    marginBottom:20,
    
  },

  /* FOOTER PINK AREA */
  footer: {
    backgroundColor: '#FF7B0975', // pink footer
    padding: 20,
    height: height * 0.15,
    opacity: 25

   
  },

  button: {
    backgroundColor: colors.btncolor,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:10
  },

  signupText: {
    color: colors.black,
  },

  signupLink: {
    color: colors.btncolor,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
 footerBg: {
  position: 'absolute',
  bottom: 0,
  width: width,
  height: height * 0.45,
  pointerEvents: 'none', // 🔥 THIS FIXES IT
},


});

export default styles;
