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
    width: "100%",
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
  questionText: {
    padding: '2%'
  },
  switch: {
    marginRight: '2%'
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
    marginLeft: '2%'

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
    marginLeft: '2%'
  },
  rightText: {
    color: 'white'
  },
  fieldsStage:{
    display:'flex',
    flex: 1,
    width: '100%',
    // flexBasis: '15%',
    alignItems: 'center'

  },
  buttonWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    width: '95%'

  },
  buttonContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-end',
  },
  titleStage: {
    fontSize: 20,
    margin: '2%',
    color: '#454545',
  },
  addHashtag: {
    fontStyle: 'italic',
    width: "100%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    paddingLeft: '2.5%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 2,
    backgroundColor: "#F1F1F1",
    marginBottom: '2.5%'
  },
  hashtagContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    // top: 0,
  },
  hashtagSecondaryContainer: {
    width: "80%",
    height: "80%",
    // justifyContent: "space-between",
  },
  hashtagButton: {
    width: "25%",
    backgroundColor: "#DDDDDD",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  hashtagFont: {
    color: "#999999",
  },
});

export const portrait = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  sidebar: {
    width: '100%',
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
    height: "50%"
  },
  logo: {
    width: '35%',
    height: '55%'
  },
  stageContainer: {
    display: 'none',
    width: "0%",
    height: "0%",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stageWrapper: {
    display: 'none',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: "0%",
    height: "0%",
  },
  stageCard: {
    display: 'none',
    alignItems: 'center',
    flex: 0,
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
    flexDirection: 'column',
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
    marginTop: '2%'
  },
  fields: {
    width: '100%',
    flex: 3,
    flexDirection: 'row',
    alignItems:'stretch',
  },
  questionText: {
    flex: 3,
    borderWidth: 3,
    maxWidth: '90%',
    padding: '1%',
    flexWrap: 'wrap'
  },
  switch: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'coral',
    marginRight: '1%',
    flexWrap: 'wrap'
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
    alignSelf: 'flex-end',
    marginLeft: '2%'
  },
  rightText: {
    color: 'white'
  },
  fieldsStage: {
    display:'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    // flexBasis: '15%',
    alignItems: 'center'

  },
  buttonWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    width: '95%'

  },
  buttonContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-end',
  },
  titleStage: {
    fontSize: 20,
    margin: '2%',
    color: '#454545',
  },
  addHashtag: {
    fontStyle: 'italic',
    width: "100%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    paddingLeft: '2.5%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 2,
    backgroundColor: "#F1F1F1",
    marginBottom: '2.5%'
  },
  hashtagContainer: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "stretch",
    // top: 0,
  },
  hashtagSecondaryContainer: {
    width: "80%",
    height: "80%",
    // justifyContent: "space-between",
  },
  hashtagButton: {
    width: "25%",
    backgroundColor: "#DDDDDD",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  hashtagFont: {
    color: "#999999",
  },
});
