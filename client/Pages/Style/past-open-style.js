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
  },
  labelName: {
    color: "white",
    fontSize: 12,
    width: "25%",
  },
  labelEmail: {
    color: "white",
    fontSize: 12,
    width: "25%",
  },
  labelPhone: {
    color: "white",
    fontSize: 12,
    width: "20%",
  },
  labelAgent: {
    color: "white",
    fontSize: 12,
    width: "20%",
  },
  labelSource: {
    color: "white",
    fontSize: 12,
    width: "10%",
  },
  leadContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: "2%",
    justifyContent: "space-between",
  },
  leadName: {
    color: "#454545",
    fontSize: 12,
    width: "25%",
  },
  leadEmail: {
    color: "#454545",
    fontSize: 12,
    width: "25%",
  },
  leadPhone: {
    color: "#454545",
    fontSize: 12,
    width: "20%",
  },
  leadAgent: {
    color: "#454545",
    fontSize: 12,
    width: "20%",
  },
  leadSource: {
    color: "#454545",
    fontSize: 12,
    width: "10%",
  },
})

export const portrait = StyleSheet.create({
  container:{ 
    flex: 1,
    height: '100%',
    width: '100%'
  },
  logoContainer: {
    flex: 1,
    backgroundColor: "#454545",
    height: "20%",
    width: "100%",
    alignItems: "center",
    padding: "5%",
  },
  contentContainer: {
    backgroundColor: "#F1F1F1",
    height: "80%",
    width: "100%"
  },
  logo: {
    resizeMode: 'contain',
    width: "80%"
  },
  leadsContainer: {
    flex: 1,
    padding: "1%",
  },
  dateAddressContainer:{
    padding: "2%",
    height: "30%",
    flexDirection: "column",
    // marginTop: "4%",
    marginBottom: "3%",
    justifyContent: "space-around",
    // borderWidth: 4,
    // borderColor: "orange"
  },
  dateAddressLeft:{

  },
  dateAddressRight: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "50%",
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: 'tomato'
  },
  buttonContainer1: {
    flex: 1,
    // marginLeft: "1.5%",
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#89C541",
    borderRadius: 2,
    height: 45,
  },
  buttonContainer2: {
    flex:1,
    marginLeft: "1.5%",
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#25AAFB",
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
    padding: "1%",
  },
  labelName: {
    color: "white",
    fontSize: 12,
    width: "25%",
  },
  labelEmail: {
    color: "white",
    fontSize: 12,
    width: "25%",
  },
  labelPhone: {
    color: "white",
    fontSize: 12,
    width: "20%",
  },
  labelAgent: {
    color: "white",
    fontSize: 12,
    width: "20%",
  },
  labelSource: {
    color: "white",
    fontSize: 12,
    width: "10%",
  },
  leadContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: "2%",
    justifyContent: "space-between",
  },
  leadName: {
    color: "#454545",
    fontSize: 12,
    width: "25%",
  },
  leadEmail: {
    color: "#454545",
    fontSize: 12,
    width: "25%",
  },
  leadPhone: {
    color: "#454545",
    fontSize: 12,
    width: "20%",
  },
  leadAgent: {
    color: "#454545",
    fontSize: 12,
    width: "20%",
  },
  leadSource: {
    color: "#454545",
    fontSize: 12,
    width: "10%",
  },
})