import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import TitleClose from "../../Components/TitleClose";
import components from "../../Components";
import FieldSwitch from "../../Containers/COH/FieldSwitch";
import CustomText from "../../Components/CustomText.js";
const { Button } = components;
import { portrait, landscape } from "../../Pages/Style/create-open-style.js";
const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
};
let styles;
if (aspectRatio > 1.6) {
  styles = portrait;
  console.log("IPHONE");
} else {
  styles = landscape;
  changeScreenOrientation();
  console.log("IPAD");
}
export default class extends Component {
  constructor(props) {
    super();
  }
  buttonRenderer() {
    switch (this.props.active) {
      case 0:
        return (
          <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => this.props.activeOnPress(this.props.active + 2)}
                label="Next"
                color="black"
                arrow="right"
              />
            </View>
          </View>
        );
        break;
      case this.props.lastStage:
        return (
          <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => this.props.activeOnPress(this.props.active)}
                label="Back"
                color="black"
                arrow="left"
              />
              <Button
                onPress={() => this.props.onSubmitHashtags()}
                label="Preview & Launch"
                color="black"
                arrow="right"
              />
            </View>
          </View>
        );
        break;
      default:
        return (
          <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => this.props.activeOnPress(this.props.active)}
                label="Back"
                color="black"
                arrow="left"
              />
              <Button
                onPress={() => {
                  this.props.onSubmitQuestions();
                  this.props.activeOnPress(this.props.active + 2);
                }}
                label="Next"
                color="black"
                arrow="right"
              />
            </View>
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ width: "100%" }}>
        <TitleClose
          title="CREATE OPEN HOUSE"
          navigation={this.props.navigation}
          nextLocation="OpenHouses"
        />
        <CustomText style={styles.titleStage}>{this.props.title}</CustomText>
        {this.props.fields.map((field, i) => {
          return (
            <FieldSwitch
              key={i.toString()}
              appState={this.props.appState}
              question={field.Question}
              type={field.type}
              value={field.value}
              parentIndex={this.props.active}
              switchIndex={i}
              switchChange={this.props.switchOnPress}
              style={styles}
              setImage={this.props.setImage}
              image={this.props.image}
            />
          );
        })}
        {this.buttonRenderer()}
      </View>
    );
  }
}
