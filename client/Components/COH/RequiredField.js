import React from "react";
import { View, Text } from "react-native";
import CustomText from "../CustomText.js";

const RequiredField = props => {
  return (
    <View style={props.styles}>
      <CustomText font="bold" style={props.style.questionText}>
        {props.question}
      </CustomText>
      <CustomText style={{ padding: "2%", fontSize: 14 }}> Required </CustomText>
    </View>
  );
};

export default RequiredField;
