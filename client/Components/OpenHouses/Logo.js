import { Image, View } from "react-native";
import React from "react";

const Logo = props => {
  return (
    <View style={props.style}>
      <Image
        source={require("../../Assets/logo.png")}
        style={props.logoStyle}
      />
    </View>
  );
};
export default Logo;
