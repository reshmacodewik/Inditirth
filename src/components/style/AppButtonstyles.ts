import { StyleSheet } from 'react-native';
import colors from '../../const/colors';


const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.btncolor,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
