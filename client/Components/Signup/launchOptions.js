import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import CustomText from "../CustomText";
import { addOpenHouse } from "../../actions/index";
import { connect } from "react-redux";

class LaunchOptions extends Component {
  constructor() {
    super();

    this.state = {
      launched: false
    };
  }
  render() {
    return (
      <View style={this.props.styles.launchContainer}>
        <TouchableOpacity
          style={this.props.styles.launchButton}
          onPress={() => {
            this.props.toggleModal();
            !this.props.relaunch &&
            this.props.addOpenHouse(
              this.props.questions,
              this.props.openHouse.openHouses,
              this.props.property
            );
          }}
        >
          <CustomText font="bold" style={this.props.styles.launchText}>
            LAUNCH
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.props.styles.launchButton}
          onPress={() => {
            this.props.toggleModal();
            this.props.navigation.goBack();
          }}
        >
          <CustomText font="bold" style={this.props.styles.cancelText}>
            Nope, Exit
          </CustomText>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProp = state => {
  return {
    questions: state.questions,
    openHouse: state.openHouse,
    property: state.property
  };
};
const mapDispatchToProps = {
  addOpenHouse
};

export default connect(mapStateToProp, mapDispatchToProps)(LaunchOptions);
