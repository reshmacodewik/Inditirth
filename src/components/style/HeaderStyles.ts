import { StyleSheet } from "react-native";
import { hp, wp } from "../../Responsive/responsive";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },

  logo: {
    width: wp(25),
    height: hp(15),
    resizeMode: 'contain',
  },

  userIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
  },
    overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  menuContainer: {
    position: 'absolute',
    top: hp(10),
    right: wp(5),
    backgroundColor: '#fff',
    borderRadius: wp(4),
    width: wp(45),
    paddingVertical: hp(2),
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  menuItem: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
  },

  menuText: {
    fontSize: wp(4),
    fontWeight: '500',
    color: '#000',
  },
});
export default styles;