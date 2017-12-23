import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import CustomText from "../CustomText.js";

const SwitchField = props => {
  return (
    <View style={props.style}>
      <CustomText font="bold" style={{ padding: "2%" }}>
        {props.question}
      </CustomText>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        style={{ marginRight: "2%" }}
      />
    </View>
  );
};

export default SwitchField;
