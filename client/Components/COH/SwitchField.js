import React from "react";
import { View, Text, Switch, StyleSheet, Dimensions } from "react-native";
import { landscape, portrait } from "../../Pages/Style/create-open-style.js";
import CustomText from "../CustomText.js";

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
const SwitchField = props => {
  return (
    <View style={props.style}>
      <CustomText font="bold" style={styles.questionText}>
        {props.question}
      </CustomText>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        style={styles.switch}
      />
    </View>
  );
};

export default SwitchField;
