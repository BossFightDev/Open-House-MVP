import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, Dimensions } from 'react-native';
import CustomText from "../../Components/CustomText";
import { landscape, portrait } from "../../Pages/Style/create-open-style.js";

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

class AddressCard extends Component{
  constructor(props) {
    super();
  }
  render() {
  return (
    <View style={this.props.style}>
      <View style={styles.addressContainer}>
      <View style={styles.MLSContainer}>
      <Image style={styles.icon} source={require('../../Assets/iconHouse.png')} />
      <CustomText style={styles.MLSText}> MLS# {this.props.MLS}</CustomText>
      </View>
      <CustomText font='bold' style={styles.addressText}>{this.props.Address}</CustomText>
      </View>
      <CustomText style={styles.property} navigation = {this.props.navigation}>
       Change Property 
      </CustomText>
    </View>
  )}
}

export default AddressCard