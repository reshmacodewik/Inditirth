import { StyleSheet } from 'react-native';
import { hp, wp } from '../Responsive/responsive';
import colors from '../const/colors';


const styles =StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingBottom: hp(0) },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  logo: { width: wp(25), height: hp(15), resizeMode: 'contain' },

  boatImage: {
    width: wp(90),
    height: hp(35),
    alignSelf: 'center',
    borderRadius: wp(3),
    marginBottom: hp(2),
  },

  infoContainer: { paddingHorizontal: wp(5) },
  boatTitle: { fontSize: wp(5), fontWeight: 'bold', marginBottom: hp(0.5) },
  capacityRow: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(1) },
  capacityText: { marginLeft: wp(2), fontSize: wp(3.5) },

  sectionTitle: { fontWeight: 'bold', fontSize: wp(4), marginBottom: hp(0.5) },
  divider:{
    borderWidth:1,
    borderColor:'#00000024',
    marginTop:wp(2)
  },
  sectionText: { fontSize: wp(3.5), marginBottom: hp(1) },

  inputLabel: { fontSize: wp(3.5), marginTop: hp(2),marginBottom:hp(2) },
  inputLabelperson: { fontSize: wp(3.5),marginBottom:hp(2) },
  dropdown: {
    backgroundColor: '#f0f0f0',
    padding: hp(1.5),
    borderRadius: wp(2),
    marginBottom: hp(1.5),
  },
  dropdownText: { color: '#aaa' },
dropdownSelectedText: {
  fontSize: wp(3.5),
  color: '#111',
},
  input: {
    backgroundColor: '#f0f0f0',
    padding: hp(1.5),
    borderRadius: wp(2),
    fontSize: wp(3.5),
  },
dayText: {
  fontSize: wp(4),
  fontWeight: '600',
  color: '#000',
},

labelText: {
  fontSize: wp(3),
  marginTop: wp(0.5),
  color: '#666',
},


  dateBox: {
    backgroundColor: '#f0f0f0',
    paddingVertical: hp(1.5),
    height:hp(10),
    paddingHorizontal: wp(5),
    borderRadius: wp(2),
    marginRight: wp(2),
  },
  dateBoxSelected: { backgroundColor: '#f58025' },
  dateText: { color: '#aaa', fontWeight: 'bold', fontSize: wp(3.5) },
  dateTextSelected: { color: '#fff' },

  timeRow: { flexDirection: 'row', marginBottom: hp(1) },
  timeBox: {
    flex: 1,
    paddingVertical: hp(1.5),
    borderRadius: wp(10),
  
    alignItems: 'center',
    backgroundColor: '#FFDFC4',
  },
  timeBoxSelected: { backgroundColor: '#ffe5d5', borderWidth: 1,
    borderColor: '#FF7B093D', },
  timeText: { color: '#aaa', fontSize: wp(3.5) },
  timeTextSelected: { color: colors.black },

 navButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: wp(6),
},

navItem: {
  alignItems: 'center',
  flexDirection:'row',
  gap:10 // keeps icon & text aligned vertically
},

navButton: {
  width: wp(10),
  height: wp(10),
  borderRadius: wp(5),
  backgroundColor: colors.success,
  alignItems: 'center',
  justifyContent: 'center',
},

navButtonText: {

  fontSize: 15,
  color: colors.black,
},

  userIcon: {
    width: 40,
    height: 40,

  },
   footerBg: {
    width: '100%',
    height: 100,

   
   
  },
});
export default styles;