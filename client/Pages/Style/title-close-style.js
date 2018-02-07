import { StyleSheet } from "react-native";
export const landscape = StyleSheet.create({
  title: {
    flexDirection: "row",
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%"
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#999",
    paddingTop: 5,
    alignSelf: "flex-start",
    marginLeft: "2%"
  },
  close: {
    flex: 1
  },
  closeContainer: {
    width: 25,
    height: 25,
    paddingTop: 10,
    paddingRight: 50
  }
})

export const portrait = StyleSheet.create({
  title: {
    flexDirection: "row",
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%"
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#999",
    paddingTop: 5,
    alignSelf: "flex-start",
    marginLeft: "2%"
  },
  close: {
    flex: 1
  },
  closeContainer: {
    width: 25,
    height: 25,
    paddingTop: 10,
    paddingRight: 40
  }
})