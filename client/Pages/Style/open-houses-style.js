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
  },
  title: {
    textAlign: 'left',
    alignSelf: 'flex-start',
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
    fontSize: 16,
  },
  guestCountTitle: {
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
  },
  address: {
  },
  guestCountContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  guestCount: {
    color: "#25AAFB",
    textAlign: 'right'
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
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
    alignSelf: 'center',
    height: "95%",
    width: "95%",
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  MLSAddress: {
    paddingTop: 10,
    flexDirection: "column",
    alignSelf: 'flex-start',

  },
  modalMLS: {
    textAlign: "left",
  },
  modalAddress: {
    textAlign: "left",
  },
  priceContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    flex: 1,
  },
  modalPrice: {
    textAlign: "right",
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
    alignItems: "center",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 90,
  },
  modalConfirmButton: {
    alignSelf: 'center',
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
    alignSelf: 'center',
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
    color: "gray",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14
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
  },
  guestCountTitle: {
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
  },
  address: {
    textAlign: "left",
  },
  guestCountContainer: {
    justifyContent: "center",
    flex: 1
  },
  guestCount: {
    color: "#25AAFB",
    textAlign: "right",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "100%",
    backgroundColor: "#F1F1F1",
    borderWidth: 3,
    borderColor: 'green'
  },
  contentWrapper: {
    alignSelf: 'center',
    height: "95%",
    width: "95%",
    borderWidth: 3,
    borderColor: 'blue',
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'blue',
  },
  MLSAddress: {
    paddingTop: 5,
    flexDirection: "column",
    alignSelf: 'flex-start',
  },
  modalMLS: {
    textAlign: "left",
    fontSize: 10,
  },
  modalAddress: {
    textAlign: "left",
    fontSize: 10,
  },
  priceContainer: {
    justifyContent: "flex-end",
    paddingBottom: 5,
    flex: 1,
  },
  modalPrice: {
    textAlign: "right",
    fontSize: 10,
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
    alignItems: "center",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 3,
    borderColor: 'blue',
  },
  modalConfirmButton: {
    alignSelf: 'center',
    width: "49%",
    height: "50%",
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
    alignSelf: 'center',
    width: "49%",
    height: "50%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
  },
  modalNopeText: {
    color: "gray",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10
  }
});
