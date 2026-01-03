import { StyleSheet } from 'react-native';
import { wp, hp } from '../Responsive/responsive';
import colors from '../const/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
    paddingBottom: hp(4),
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    paddingHorizontal: wp(5),
    marginBottom: hp(2),
  },

  title: {
    fontSize: wp(5),
    fontWeight: '600',
    color: '#000',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: wp(5),
    marginBottom: hp(2),
    borderRadius: wp(4),
    padding: wp(4),
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  cardTitle: {
    fontSize: wp(4.2),
    fontWeight: '600',
    marginBottom: hp(1),
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1),
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerIcon: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  activityName: {
    fontSize: 13,
    color: colors.btncolor,
    fontWeight: '600',
  },

  locationText: {
    fontSize: wp(3.5),
    color: '#333',
  },

  label: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '600',
    marginTop: hp(1),
  },
  labeltotal: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '400',
   
   
  },
  labeltax: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '400',
    marginTop:-5

  },  
  valuetax: {
    fontSize: 13,
    color: colors.black,
marginTop:-5
  },

  value: {
    fontSize: 13,
    color: colors.black,
    marginTop: hp(0.5),
  },

  editText: {
    fontSize: wp(3.5),
    color: '#FF8A00',
    fontWeight: '500',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },

  totalText: {
    fontSize: wp(4),
    fontWeight: '700',
  },

  couponInput: {
    marginTop: hp(1),
    backgroundColor: '#FBEAEA',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    height: hp(6),
    fontSize: wp(3.8),
  },

  payButton: {
    marginTop: hp(0),
    backgroundColor: '#159947',
    width: wp(40),
    paddingVertical: hp(2),
    borderRadius: wp(6),
    alignItems: 'center',
    alignSelf:'center',
    justifyContent:'center',
  },

  payText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: '600',
  },
});
export default styles;
