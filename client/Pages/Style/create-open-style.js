import { StyleSheet, Dimensions } from "react-native";
export const landscape = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },
  sidebar: {
    width: "25%",
    backgroundColor: "#454545",
    // padding: 20,
    flex: 1
    // backgroundColor:'#454545',
    // alignItems: 'stretch',
    // width: '25%',
  },
  chooseImageButton: {
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
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "17%"
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "55%"
  },
  stageContainer: {
    width: "100%",
    height: "66%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  stageWrapper: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "80%"
  },
  stageCard: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#454545"
  },
  addressCard: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(51, 51, 51, .7)"
  },
  addressContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  MLSContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    // width: "10%",
    // height: "10%"
  },
  MLSText: {
    fontSize: 16,
    color: "#999999"
  },
  addressText: {
    fontSize: 12,
    color: "white"
  },
  property: {
    fontSize: 10,
    color: "#25AAFB",
    marginTop: "5%"
  },
  fields: {
    flex: 3,
    flexDirection: "row",
    alignItems: "stretch"
  },
  questionText: {
    padding: "2%",
    fontSize: 15,
  },
  switch: {
    marginRight: "2%"
  },
  innerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
    marginLeft: "2%"
  },
  leftText: {
    color: "#999999"
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
    color: "white"
  },
  fieldsStage: {
    // flex: 1,
    width: "100%",
    height: 100,
    justifyContent: 'center',
    // flexBasis: '15%',
    alignItems: "center"
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    width: "95%"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end"
  },
  titleStage: {
    fontSize: 20,
    margin: "2%",
    color: "#454545"
  },
  hashtagInput: {
    fontStyle: "italic",
    width: "100%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    paddingLeft: "2.5%",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 2,
    backgroundColor: "#F1F1F1",
    marginBottom: "2.5%"
  },
  hashtagContainer: {
    width: "95%",
    maxHeight: "95%",
    backgroundColor: "white",
    padding: "5%"
  },
  hashtagInputContainer: {
    width: "100%",
    alignItems: "flex-start"
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
    color: "#999999"
  },
  modal: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: {
    // need to change for mobile currently too tall and too narrow
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "55%",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#DDDDDD",
    backgroundColor: "#F1F1F1",
    padding: 0
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    width: "95%"
  },
  displayImageContainer: {
    padding: "2%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 2,
    width: "50%"
  },
  modalButtonWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    width: "95%"
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end"
  }
});

export const portrait = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
  },
  sidebar: {
    width: "100%",
    backgroundColor: "#454545",
    // padding: 20,
    flex: 1
    // backgroundColor:'#454545',
    // alignItems: 'stretch',
    // width: '25%',
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%"
  },
  logo: {
    width: "35%",
    height: "55%"
  },
  stageContainer: {
    display: "none",
    width: "0%",
    height: "0%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  stageWrapper: {
    display: "none",
    justifyContent: "space-around",
    alignItems: "center",
    width: "0%",
    height: "0%"
  },
  stageCard: {
    display: "none",
    alignItems: "center",
    flex: 0,
    backgroundColor: "#454545"
  },
  addressCard: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(51, 51, 51, .7)"
  },
  addressContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  MLSContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    // width: "10%",
    // height: "10%"
  },
  MLSText: {
    fontSize: 16,
    color: "#999999"
  },
  addressText: {
    fontSize: 12,
    color: "white"
  },
  property: {
    fontSize: 10,
    color: "#25AAFB",
    marginTop: "2%"
  },
  fields: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
    alignItems: "stretch"
  },
  questionText: {
    flex: 4,
    marginLeft: '1.5%',
    padding: "1%",
    paddingRight: "10%",
    flexWrap: "wrap",
    fontSize: 11,
  },
  switch: {
    flex: 1
  },
  innerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
    alignItems: "center"
  },
  leftText: {
    color: "#999999"
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
    alignSelf: "flex-end",
    marginLeft: "2%"
  },
  rightText: {
    color: "white"
  },
  fieldsStage: {
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // flexBasis: '15%',
    alignItems: "center",
  },
  buttonWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    width: "95%"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end"
  },
  titleStage: {
    fontSize: 20,
    margin: "2%",
    color: "#454545"
  },
  hashtagInput: {
    fontStyle: "italic",
    width: "100%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    paddingLeft: "2.5%",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 2,
    backgroundColor: "#F1F1F1",
    marginBottom: "2.5%"
  },
  hashtagContainer: {
    // alignSelf: 'flex-start',
    width: "95%",
    maxHeight: "95%",
    backgroundColor: "white",
    padding: "5%"
  },
  hashtagInputContainer: {
    width: "100%",
    alignItems: "flex-start"
  },
  hashtagButton: {
    width: "35%",
    backgroundColor: "#DDDDDD",
    paddingTop: "2%",
    paddingBottom: "2%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  hashtagFont: {
    color: "#999999"
  },
  modal: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: {
    // need to change for mobile currently too tall and too narrow
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    maxHeight: "40%",
    width: "90%",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#DDDDDD",
    backgroundColor: "#F1F1F1",
    padding: 0
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    width: "95%"
  },
  displayImageContainer: {
    padding: "2%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 2,
    width: "50%"
  },
  modalButtonWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    width: "95%"
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end"
  },
  chooseImageButton: {
    width: "30%",
    backgroundColor: "#DDDDDD",
    paddingTop: "1%",
    paddingBottom: "1%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
