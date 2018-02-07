import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import CustomText from "./CustomText.js";

import { landscape, portrait } from "../Pages/Style/title-close-style";
// SET PROPER STYLING IF LANDSCAPE OR PORTRAIT
const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
};
let styles;
if (aspectRatio > 1.6) {
  styles = portrait;
} else {
  styles = landscape;
  changeScreenOrientation();
}
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
            resizeMode='contain'
            style={styles.close}
            source={require("../Assets/iconClose2x.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TitleClose;
