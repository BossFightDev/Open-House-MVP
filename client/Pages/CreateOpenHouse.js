import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import Sidebar from "../Containers/COH/Sidebar";
import Stage from "../Containers/COH/Stage";
import TitleClose from "../Components/TitleClose";
import Fields from "../Assets/fields";
import CustomText from "../Components/CustomText";
import { landscape, portrait } from "./Style/create-open-style.js";
import { addQuestions, addHashtags } from "../actions/index";
import { connect } from "react-redux";

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
const stages = [
  {
    number: 1,
    stage: "Select Questions"
  },
  {
    number: 2,
    stage: "Display Options"
  },
  {
    number: 3,
    stage: "Add Hashtags"
  },
  {
    number: 4,
    stage: "Launch Open House"
  }
];

class CreateOpenHouse extends Component {
  constructor() {
    super();
    this.state = {
      currentStage: 1,
      sideBarStages: stages,
      fields: Fields
    };
    this.switchStateChange = this.switchStateChange.bind(this);
    this.activeStageChange = this.activeStageChange.bind(this);
  }
  onSubmitHashtags = () => {
    if (this.state.fields[2][0].value.length >= 1) {
      const hashtagQ = true,
        hashtags = this.state.fields[2][0].value;
      this.props.addHashtags(hashtagQ, hashtags);
    }
    this.props.navigation.navigate("Signup");
  };
  onSubmitQuestions = () => {
    const phoneQ = this.state.fields[0][2].value,
      agentQ = this.state.fields[0][3].value,
      sourceQ = this.state.fields[0][4].value,
      suggestQ = this.state.fields[0][5].value,
      imageQ = this.state.fields[1][0].value,
      image = this.state.fields[1][0].uri,
      priceQ = this.state.fields[1][1].value,
      bedBathQ = this.state.fields[1][2].value,
      sqftq = this.state.fields[1][3].value;
    this.props.addQuestions(
      phoneQ,
      agentQ,
      sourceQ,
      suggestQ,
      imageQ,
      image,
      priceQ,
      bedBathQ,
      sqftq
    );
  };

  switchStateChange(containerIndex, componentIndex) {
    const fields = this.state.fields;
    const value = fields[containerIndex][componentIndex].value;
    fields[containerIndex][componentIndex].value = !value;

    this.setState({
      fields: fields
    });
  }
  activeStageChange(stage) {
    this.setState({
      currentStage: stage
    });
  }
  componentDidMount() {
    const fields = this.state.fields;
    fields[1][0].uri = this.props.property.images[0];
    this.setState({
      fields: fields
    })
  }
  render() {
    console.log(JSON.stringify(this.props.user))
    const PivotingFields = this.state.fields.map((field, i) => {
      return (
        <Stage
          navigation={this.props.navigation}
          title={this.state.sideBarStages[i].stage}
          fields={field}
          active={i}
          switchOnPress={this.switchStateChange}
          activeOnPress={this.activeStageChange}
          lastStage={this.state.fields.length - 1}
          onSubmitHashtags={this.onSubmitHashtags}
          onSubmitQuestions={this.onSubmitQuestions}
        />
      );
    });
    return (
      <View style={styles.divider}>
        <View style={styles.screen}>
          <Sidebar
            style={styles.sidebar}
            currentStage={this.state.currentStage}
            MLS="1234567"
            Address="123 Main Street, San Marcos"
            stages={this.state.sideBarStages}
            navigation={this.props.navigation}
          />
          <View style={styles.fields}>
            {PivotingFields[this.state.currentStage - 1]}
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addHashtags,
  addQuestions
};
const mapStateToProps = (state, ownProps) => {
  return {
    property: state.property,
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOpenHouse);
