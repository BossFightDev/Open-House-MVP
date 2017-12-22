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
    flexDirection: 'row',
    alignItems:'stretch',
  },
  innerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLeft: {
    width: "49%",
    backgroundColor: "#DDDDDD",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  leftText: {
    color: '#999999'
  },
  buttonRight: {
    width: "49%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    backgroundColor: "#25AAFB",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%"
  },
  rightText: {
    color: 'white'
  },
  fieldsStage:{
    display:'flex',
    flex: 1,
    // flexBasis: '15%',
    alignContent: 'flex-end',

  },
  buttonWrapper: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    flex: 0,
    width: '75%'
    
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: "99%",
    justifyContent: 'flex-end',
  },
  titleStage: {
    fontSize: 18,
    fontWeight: '300',
    color: '#454545',
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
    flexDirection: 'row',
    alignItems:'stretch',
  },
  innerButton: {
    flexDirection: 'row',
  },
  buttonLeft: {
    width: "49%",
    backgroundColor: "#DDDDDD",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  leftText: {
    color: '#999999'
  },
  buttonRight: {
    width: "49%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    backgroundColor: "#25AAFB",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%"
  },
  rightText: {
    color: 'white'
  },
  fieldsStage:{
    display:'flex',
    flex: 1,
    // flexBasis: '15%',
    alignContent: 'flex-end',

  },
  buttonWrapper: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    flex: 0,
    width: '75%'
    
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: "99%",
    justifyContent: 'flex-end',
  },
  titleStage: {
    fontSize: 18,
    fontWeight: '300',
    color: '#454545',
  },
});
