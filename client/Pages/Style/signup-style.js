import { StyleSheet } from "react-native";

export const landscape = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row"
  },
  createPinContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    backgroundColor: "#454545",
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  companyContainer: {
    justifyContent: "center",
    paddingTop: "20%",
    height: "50%",
    width: "75%"
  },

  buttonContainer: {
    height: "25%"
  },
  button: {
    alignSelf: 'center',
    width: '85%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: "#25AAFB",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: "3%"
  },
  exitIcon: {
    position: "absolute",
    width: 100,
    height: 100,
    marginTop: "1%",
    left: 0,
    alignSelf: "flex-start",
    top: 0
  },
  cardContainer: {
    position: "absolute",
    width: "95%",
    height: "25%",
    bottom: 0
  },
  card: {
    width: "100%",
    height: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center"
  },
  addressContainer: {
    width: "80%",
    marginLeft: "5%"
  },
  addressText: {
    color: "white",
    fontSize: 28
  },
  detailsContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%"
  },
  priceText: {
    color: "white",
    marginRight: "2%",
    fontSize: 18
  },
  bedsText: {
    color: "white",
    marginHorizontal: "2%",
    fontSize: 18
  },
  bathsText: {
    color: "white",
    marginHorizontal: "2%",
    fontSize: 18
  },
  sqftText: {
    color: "white",
    marginHorizontal: "2%",
    fontSize: 18
  },
  realtorDetailsContainer: {
    marginLeft: "5%",
    marginTop: "5%"
  },
  realtorDetails: {
    flexDirection: "row",
    alignItems: "center"
  },
  realtorImage: {
    height: "100%",
    width: "20%",
    marginRight: "2%"
  },
  realtorInfoContainer: {
    flexDirection: "column"
  },
  realtorInfo: {
    flexDirection: "row"
  },
  realtorName: {
    color: "white",
    fontSize: 14
  },
  realtorText: {
    color: "white",
    fontSize: 12
  },
  company: {
    color: "white",
    fontSize: 12
  },
  contactInfo: {
    flexDirection: "row"
  },
  phoneNumber: {
    color: "white",
    fontSize: 12,
    marginRight: "5%"
  },
  email: {
    color: "white",
    fontSize: 12
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    padding: "2.5%"
  },
  inputContainer: {
    height: "100%",
    width: "80%",
    alignSelf: "center",

    justifyContent: "space-around"
  },
  innerContainer: {
    marginBottom: "5%",
    alignSelf: 'center',
    width: '85%'
  },
  realEstateContainer: {
    marginBottom: "5%",
    alignSelf: 'center',
    width: '85%'
  },
  titleContainer: {
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%"
  },
  animated: {
    width: "50%"
  },
  headerText: {
    textAlign: "center",
    color: "#424242",
    fontSize: 60,
    marginBottom: "-2%"
  },
  subHeaderText: {
    textAlign: "center",
    color: "#bababa",
    fontSize: 18,
    backgroundColor: "transparent"
  },
  launchContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  launchButton: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    alignItems: "center",
    width: "34%",
    height: "17%",
    borderRadius: 5,
    margin: 1,
    justifyContent: "center"
  },
  launchText: {
    color: "yellowgreen",
    fontSize: 30
  },
  cancelText: {
    color: "red",
    fontSize: 22
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    height: "10%"
  },
  pinInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    width: "25%",
    fontSize: 20,
    textAlign: "center",
    margin: "2%"
  },
  signupContainer: {
    width: "50%",
    height: '100%',
    // margin: '1%',
    padding: "1%"
  }
});

export const portrait = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "#f1f1f1",
    marginTop: "2%",
    flex: 1
  },
  createPinContainer: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    height: "25%"
  },

  companyContainer: {
    justifyContent: "center",
    height: 200,
    width: 200
  },
  button: {
    alignSelf: 'center',
    width: '85%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: "#25AAFB",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: "3%"
  },
  exitIcon: {
    position: "absolute",
    width: 100,
    height: 100,
    marginTop: "1%",
    left: 0,
    alignSelf: "flex-start",
    top: 0
  },
  cardContainer: {
    position: "absolute",
    width: "96%",
    height: "45%",
    bottom: 0
  },
  card: {
    width: "100%",
    height: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center"
  },
  addressContainer: {
    width: "80%",
    marginLeft: "5%"
  },
  addressText: {
    color: "white",
    fontSize: 13
  },
  detailsContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%"
  },
  priceText: {
    color: "white",
    marginRight: "2%",
    fontSize: 12
  },
  bedsText: {
    color: "white",
    marginHorizontal: "2%",
    fontSize: 12
  },
  bathsText: {
    color: "white",
    marginHorizontal: "2%",
    fontSize: 12
  },
  sqftText: {
    color: "white",
    marginHorizontal: "2%",
    fontSize: 12
  },
  realtorDetailsContainer: {
    marginLeft: "5%",
    marginTop: "5%"
  },
  realtorDetails: {
    flexDirection: "row",
    alignItems: "center"
  },
  realtorImage: {
    height: "100%",
    width: "20%",
    marginRight: "2%"
  },
  realtorInfoContainer: {
    flexDirection: "column"
  },
  realtorInfo: {
    flexDirection: "row"
  },
  realtorName: {
    color: "white",
    fontSize: 10
  },
  realtorText: {
    color: "white",
    fontSize: 10
  },
  company: {
    color: "white",
    fontSize: 10
  },
  contactInfo: {
    flexDirection: "row"
  },
  phoneNumber: {
    color: "white",
    fontSize: 10,
    marginRight: "5%"
  },
  email: {
    color: "white",
    fontSize: 10
  },
  input: {
    width: "100%",
    alignSelf: 'center',
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    padding: "2.5%"
  },
  // inputContainer: {
  //   flex: 1,
  // },
  innerContainer: {
    marginBottom: "3%",
    alignSelf: 'center',
    width: '85%'
  },
  realEstateContainer: {
    marginBottom: "3%",
    alignSelf: 'center',
    width: '85%'
  },
  titleContainer: {
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%"
  },
  headerText: {
    color: "#424242",
    fontSize: 42,
    marginBottom: "-5%"
  },
  subHeaderText: {
    color: "#bababa",
    fontSize: 18,
    backgroundColor: "transparent"
  },
  launchContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  launchButton: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    alignItems: "center",
    width: "45%",
    height: "10%",
    justifyContent: "center",
    borderRadius: 5,
    margin: 1
  },
  launchText: {
    color: "yellowgreen",
    fontSize: 22
  },
  cancelText: {
    color: "red",
    fontSize: 22
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "25%"
  },
  pinInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    width: "20%",
    fontSize: 20,
    textAlign: "center",
    margin: "0.5%"
  },
  signupContainer: {
    width: "95%",
    height: '59.5%',
    margin: "1%",
    padding: "1%",
    paddingBottom: 30,
  }
});
