import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import CustomText from "../CustomText";
import { connect } from "react-redux";

class Submitted extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <View style={this.props.styles.titleContainer}>
          <CustomText font="milkshake" style={this.props.styles.headerText}>
            Thank You
          </CustomText>
          <CustomText style={this.props.styles.subHeaderText}>
            Enjoy your visit
          </CustomText>
        </View>
        <View style={this.props.styles.companyContainer}>
          <Image
            source={{ uri: this.props.user.companyPicture }}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Submitted);
