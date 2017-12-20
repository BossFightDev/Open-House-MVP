import { StyleSheet } from "react-native";
export const landscape = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#454545',
    // padding: 20,
    flex: 1,
    // backgroundColor:'#454545',
    // alignItems: 'stretch',
    // width: '25%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "17%"
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    height: "55%",
  },
  stageContainer: {
    width: "100%",
    height: "66%",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stageWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: "80%",
    height: "80%",
  },
  stageCard: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#454545'
  },
  addressCard: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(51, 51, 51, .7)'
  },
  addressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  MLSContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // width: "10%",
    // height: "10%"
  },
  MLSText: {
    fontSize: 16,
    color: '#999999'
  },
  addressText: {
    fontSize: 12,
    color: 'white'
  },
  property: {
    fontSize: 10,
    color: '#25AAFB',
    marginTop: '5%'
  },
  fields: {
    flex: 3,
    padding: 20,
    flexDirection: 'row',
    alignItems:'stretch',
  },
});

export const portrait = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#454545',
    // padding: 20,
    flex: 1,
    // backgroundColor:'#454545',
    // alignItems: 'stretch',
    // width: '25%',
  },
  fields: {
    flex: 3,
    padding: 20,
    flexDirection: 'row',
    alignItems:'stretch',
  }
});
