import React from "react";
import { View, Text } from "react-native";
import CustomText from "../CustomText.js";

const RequiredField = props => {
  return (
    <View style={props.style}>
      <CustomText font="bold" style={{ padding: "2%" }}>
        {props.question}
      </CustomText>
      <CustomText style={{ padding: "2%" }}> Required </CustomText>
    </View>
  );
};

export default RequiredField;
