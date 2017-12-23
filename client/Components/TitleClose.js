import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import CustomText from "./CustomText.js";

const TitleClose = props => {
  return (
    <View style={styles.title}>
      <CustomText font="bold" style={styles.text}>
        {props.title}
      </CustomText>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(props.nextLocation)}
      >
        <View style={styles.closeContainer}>
          <Image
            style={styles.close}
            source={require("../Assets/iconClose.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    paddingRight: "2.5%"
  }
});

export default TitleClose;
