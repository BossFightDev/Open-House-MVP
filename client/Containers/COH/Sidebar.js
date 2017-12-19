import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions} from 'react-native';
import StageCard from '../../Components/COH/StageCard';
import AddressCard from '../../Components/COH/AddressCard'
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
export default class extends Component {
  constructor(props) {
    super();
  }
  navigateBack() {
    this.props.navigation.navigate('OpenHouses');
  }
  render() {
    return (
        <View style={this.props.style}>
          <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../Assets/logo.png')} />
          </View>
          <View style={styles.logoContainer}>
          <AddressCard
            MLS={this.props.MLS}
            Address={this.props.Address}
            navigation={this.props.navigation}
            style={styles.addressCard}
          />
          </View>
          <View style={styles.stageContainer}>
          <View style={styles.stageWrapper}>
          {this.props.stages.map(stage => {
            return <StageCard style={styles.stageCard} key={stage.number.toString()} currentStage={this.props.currentStage} number={stage.number} stage={stage.stage}/>
          })}
          </View>
          </View>
      </View>
    )
  }
}