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
  rightSide: {
    flexDirection: 'column',
    width: '50%'
  },
  openHouseContainer: {
    backgroundColor: "#F1F1F1",
    height: "16%",
  },
  headerContainer: {
    paddingLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD"
  },
  headerInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90%",
    
    borderWidth: 4
  },
  title: {
    textAlign: "left",
    alignSelf: "flex-start",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 10
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 25,
    alignSelf: "flex-start"
  },
  searchBar: {
    paddingTop: 10,
    paddingBottom: 5,
    width: "64%",
    height: 45,
    backgroundColor: "white",
    fontSize: 14,
    paddingLeft: '5%',
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
    fontSize: 14
  },
  POHContainer: {
    height: '85%',
    width: '100%',
  },
  list: {
    height: '84%',
  },
  listTextContainer: {
    flexDirection: "row",
    paddingTop: "5%",
    paddingBottom: "2.5%",
    // alignSelf: "center",
    justifyContent: "space-between",
    paddingLeft: '5%',
    paddingRight: '5%',

  },
  listTitle: {
    fontSize: 16
  },
  guestCountTitle: {
    fontSize: 10
  },
  POHItem: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "5%",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#DDDDDD"
  },
  imageContainer: {
    width: 100,
    height: 82
  },
  POHItemImage: {
    width: "100%",
    height: "100%"
  },
  infoWrapper: {
    width: "79%",
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    width: "90%",
    flexDirection: "row"
  },
  dateAddress: {
    flexDirection: "column"
  },
  date: {},
  address: {},
  guestCountContainer: {
    flex: 1,
    alignSelf: "center"
  },
  guestCount: {
    color: "#25AAFB",
    textAlign: "right"
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "60%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#DDDDDD",
    backgroundColor: "#F1F1F1"
  },
  contentWrapper: {
    alignSelf: "center",
    height: "95%",
    width: "95%"
  },
  modalImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "75%"
  },
  modalTextContainer: {
    backgroundColor: "#F1F1F1",
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  MLSAddress: {
    paddingTop: 10,
    flexDirection: "column",
    alignSelf: "flex-start"
  },
  modalMLS: {
    textAlign: "left"
  },
  modalAddress: {
    textAlign: "left"
  },
  priceContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    flex: 1
  },
  modalPrice: {
    textAlign: "right"
  },
  modalImage: {
    backgroundColor: "#F1F1F1",
    height: "100%",
    width: "100%",
    justifyContent: "center"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 90
  },
  modalConfirmButton: {
    alignSelf: "center",
    width: "49%",
    height: "50%",
    backgroundColor: "#25AAFB",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "2%",
    marginBottom: 15
  },
  modalConfirmText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14
  },
  modalNopeButton: {
    alignSelf: "center",
    width: "49%",
    height: "50%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  modalNopeText: {
    color: "#999999",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14
  }
});
// THIS IS STYLED FOR PORTRAIT MODE
export const portrait = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    // width: "100%"
  },
  logoContainer: {
    backgroundColor: "#454545",
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: '52.5%',
    height: '70%'
  },
  rightSide: {
    height: '85%',
    flex: 1
  },
  openHouseContainer: {
    backgroundColor: "#F1F1F1",
    height: "20%",
    width: "100%"
  },
  headerContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    padding: '5%'
    
  },
  title: {
    flex: 1,
    fontSize: 14,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  searchBar: {
    flex: 2.5,
    width: "67%",
    height: 35,
    paddingLeft: '5%',
    backgroundColor: "white",
    borderRadius: 2,
    fontSize: 10,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: '1%',
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#25AAFB",
    width: "23%",
    height: 35,
    borderRadius: 2
  },
  buttonText: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12
  },
  POHContainer: {
    height: '80%',
    width: '100%',
  },
  list: {
    height: '90%',
  },
  listTextContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    paddingTop: '5%',
    height: '10%',
    justifyContent: "space-between"
  },
  listTitle: {},
  guestCountTitle: {
    fontSize: 10
  },
  POHItem: {
    alignSelf: "center",
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    flex: 1,
    marginBottom: '5%',
    borderColor: "#DDDDDD"
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: 200
  },
  POHItemImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  infoWrapper: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    padding: '3%'
    
  },
  infoContainer: {
    width: "90%",
    flex: 1
  },
  dateAddress: {
    flexDirection: "column"
  },
  date: {
    textAlign: "left"
  },
  address: {
    textAlign: "left"
  },
  guestCountContainer: {
    justifyContent: "center",
  },
  guestCount: {
    color: "#25AAFB",
    textAlign: "right"
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "100%",
    backgroundColor: "#F1F1F1"
  },
  contentWrapper: {
    alignSelf: "center",
    height: "95%",
    width: "95%"
  },
  modalImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "75%"
  },
  modalTextContainer: {
    backgroundColor: "#F1F1F1",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  MLSAddress: {
    paddingTop: 5,
    flexDirection: "column",
    alignSelf: "flex-start"
  },
  modalMLS: {
    textAlign: "left",
    fontSize: 10
  },
  modalAddress: {
    textAlign: "left",
    fontSize: 10
  },
  priceContainer: {
    justifyContent: "flex-end",
    paddingBottom: 5,
    flex: 1
  },
  modalPrice: {
    textAlign: "right",
    fontSize: 10
  },
  modalImage: {
    backgroundColor: "#F1F1F1",
    height: "100%",
    width: "100%",
    justifyContent: "center"
  },
  buttonWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  modalButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  modalConfirmButton: {
    alignSelf: "center",
    width: "49%",
    height: "70%",
    backgroundColor: "#25AAFB",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "2%"
  },
  modalConfirmText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10
  },
  modalNopeButton: {
    alignSelf: "center",
    width: "49%",
    height: "70%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center"
  },
  modalNopeText: {
    color: "#999999",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10
  }
});
