import { StyleSheet } from "react-native";
export const landscape = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    borderColor: 'purple',
    borderWidth: 3,
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
    borderWidth: 3,
    borderColor: 'blue',
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
    borderWidth: 3,
    borderColor: 'green',
  },
  stageWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 3,
    width: "80%",
    height: "80%",
    borderColor: 'green',
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
    flexDirection: 'row'
  },
  icon: {
    // width: "10%",
    // height: "10%"
  },
  fields: {
    flex: 3,
    padding: 20,
    flexDirection: 'row',
    alignItems:'stretch',
    borderWidth: 3,
    borderColor: 'yellow',
  },
});

export const portrait = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    borderColor: 'purple',
    borderWidth: 3,
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
    borderWidth: 3,
    borderColor: 'yellow',
  }
});
