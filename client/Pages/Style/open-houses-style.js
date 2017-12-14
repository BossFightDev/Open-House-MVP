import { StyleSheet } from "react-native";
export const landscape = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },
  logoContainer: {
    backgroundColor: "#454545",
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    // width: 180,
    // height: 65
  },
  openHouseContainer: {
    backgroundColor: "#F1F1F1",
    height: "100%",
    width: "50%"
  },
  headerContainer: {
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD"
  },
  headerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    height: "90%",
    borderWidth: 3,
    borderColor: 'blue'
  },
  title: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 10
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 25,
    alignSelf: 'flex-start'
  },
  searchBar: {
    paddingTop: 10,
    paddingBottom: 5,
    width: "64%",
    height: 45,
    backgroundColor: "white",
    fontFamily: "Montserrat-Light",
    fontSize: 14,
    textAlign: "center",
    borderWidth: 1, 
    borderRadius: 2,
    borderColor: "#DDDDDD"
  },
  buttonContainer: {
    marginLeft: "1.5%",
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#25AAFB",
    width: "28.5%",
    height: 45,
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Montserrat-Bold",
    fontSize: 14
  },
  listTextContainer: {
    flexDirection: "row",
    marginTop: '5%',
    marginBottom: '2.5%',
    width: '90%',
    alignSelf: "center",
    justifyContent: "space-between",
  },
  listTitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  guestCountTitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 10
  },
  POHItem: {
    flexDirection: "row",
    width: '90%',
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '5%',
    borderWidth: 1, 
    borderRadius: 2,
    borderColor: "#DDDDDD"
  },
  imageContainer: {
    width: 100,
    height: 82
  },
  POHItemImage: {
    width: '100%',
    height: '100%'
  },
  infoWrapper: {
    width: "79%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: "90%",
    flexDirection: 'row',
  },
  dateAddress: {
    flexDirection: "column",
  },
  date: {
    fontFamily: "Montserrat-Bold"
  },
  address: {
    fontFamily: "Montserrat-Regular",
  },
  guestCountContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  guestCount: {
    fontFamily: "Montserrat-Bold",
    color: "#25AAFB",
    textAlign: 'right'
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: {
    height: 400,
    width: 400
  },
  modalImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1"
  },
  modalTextContainer: {
    backgroundColor: "#F1F1F1"
  },
  modalImage: {
    backgroundColor: "#F1F1F1",
    height: 200,
    width: 300,
    justifyContent: "center"
  },
  modalButtonsContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1"
  },
  modalConfirmButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#25AAFB",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  modalConfirmText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  modalNopeButton: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  modalNopeText: {
    color: "gray",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});
// THIS IS STYLED FOR PORTRAIT MODE
export const portrait = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  logoContainer: {
    backgroundColor: "#454545",
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 180,
    height: 65
  },
  openHouseContainer: {
    backgroundColor: "#F1F1F1",
    height: "100%",
    width: "100%"
  },
  headerContainer: {
    paddingLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD"
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    marginTop: 25,
    marginBottom: 10
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "flex-start"
  },
  searchBar: {
    paddingTop: 10,
    paddingBottom: 5,
    width: "67%",
    height: 35,
    backgroundColor: "white",
    borderRadius: 2,
    fontFamily: "Montserrat-Light",
    fontSize: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#25AAFB",
    width: "23%",
    height: 35,
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Montserrat-Bold",
    fontSize: 12
  },
  listTextContainer: {
    flexDirection: "row",
    marginTop: '5%',
    marginBottom: '5%',
    width: '85%',
    alignSelf: "center",
    justifyContent: "space-between",
  },
  listTitle: {
    fontFamily: "Montserrat-Regular"
  },
  guestCountTitle: {
    fontFamily: "Montserrat-Light",
    fontSize: 10
  },
  POHItem: {
    alignSelf: "center",
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDDDDD"
  },
  imageContainer: {
    width: "100%",
    height: "75%"
  },
  POHItemImage: {
    width: "100%",
    height: "100%"
  },
  infoWrapper: {
    width: "100%",
    height: "25%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#DDDDDD"
  },
  infoContainer: {
    width: "90%",
    height: "70%",
  },
  dateAddress: {
    flexDirection: "column",
  },
  date: {
    textAlign: "left",
    fontFamily: "Montserrat-Bold"
  },
  address: {
    textAlign: "left",
    fontFamily: "Montserrat-Light"
  },
  guestCountContainer: {
    justifyContent: "center",
    flex: 1
  },
  guestCount: {
    fontFamily: "Montserrat-Bold",
    color: "#25AAFB",
    textAlign: "right",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: {
    height: 400,
    width: 400
  },
  modalImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1"
  },
  modalTextContainer: {
    backgroundColor: "#F1F1F1"
  },
  modalImage: {
    backgroundColor: "#F1F1F1",
    height: 200,
    width: 300,
    justifyContent: "center"
  },
  modalButtonsContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1"
  },
  modalConfirmButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#25AAFB",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  modalConfirmText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  modalNopeButton: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#fff"
  },
  modalNopeText: {
    color: "gray",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});
