import { StyleSheet } from 'react-native';

export const landscape = StyleSheet.create({
  container:{ 
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%'
  },
  logoContainer: {
    flex: 1,
    backgroundColor: "#454545",
    height: "100%",
    width: "30%",
    alignItems: "center",
    paddingTop: "5%"
  },
  contentContainer: {
    backgroundColor: "#F1F1F1",
    height: "100%",
    width: "70%"
  },
  logo: {
    resizeMode: 'contain',
    width: "80%"
  },
  leadsContainer: {
    flex: 1,
    padding: "3%"
  },
  dateAddressContainer:{
    flexDirection: "row",
    marginTop: "4%",
    marginBottom: "3%",
    justifyContent: "space-between"
  },
  dateAddressLeft:{

  },
  dateAddressRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonContainer1: {
    marginLeft: "1.5%",
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#89C541",
    width: "28.5%",
    height: 45,
    borderRadius: 2
  },
  buttonContainer2: {
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
  labelContainer: {
    flexDirection: "row",
    backgroundColor: "#555555",
    padding: "2%",
    justifyContent: "space-between",
  },
  label: {
    color: "white",
    fontSize: 12
  },
  leadContainer: {
    flexDirection: "row",
    backgroundColor: "#white",
    padding: "2%",
    justifyContent: "space-between",
  },
  lead: {
    color: "#454545",
    fontSize: 12
  },
})

export const portrait = StyleSheet.create({
  container:{ 
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  }
})