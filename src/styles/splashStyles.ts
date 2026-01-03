import { Dimensions, StyleSheet } from "react-native";
import colors from "../const/colors";

const { width ,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, // change color if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.5,   // responsive
    height: width * 0.5,  // responsive
  },
   footerBg: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.65, // footer height (adjust if needed)
  },
});

export default styles;