import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image, Dimensions} from 'react-native';
import CustomText from './CustomText.js';
import { portrait, landscape } from "../Pages/Style/create-open-style.js"
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
}
let styles;
if (aspectRatio > 1.6) {
   styles = portrait;
  console.log('IPHONE');
  
}
else {
   styles = landscape;
  changeScreenOrientation();
  console.log('IPAD');
}
class Button extends Component{
  constructor(props) {
    super()
  }
  smartMiddle = () => {
    switch(this.props.arrow){
      case 'left':
        return(
          <View style={styles.innerButton}>
            <Image source={require('../Assets/iconBack.png')} />
            <CustomText style={styles.leftText}> {this.props.label} </CustomText>
          </View>
        )
        break;
      case 'right':
        return(
          <View style={styles.innerButton}>
            <CustomText style={styles.rightText}> {this.props.label} </CustomText>
            <Image source={require('../Assets/iconArrow.png')} />
          </View>
        )
        break;
      default:
        return (
        <Text
          style={styles.buttonText}
        >
          {this.props.label}
        </Text>
      )
    }
  }

  render(){
    return(
      <TouchableOpacity
        style={this.props.arrow === 'left'? styles.buttonLeft: styles.buttonRight}
        onPress={this.props.onPress}
        underlayColor="#fff"
      >
        {this.smartMiddle()}
      </TouchableOpacity>
    )
  }
}

export default Button;
