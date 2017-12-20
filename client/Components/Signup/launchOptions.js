import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import CustomText from '../CustomText';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      launched: false,
    }
  }
  render() {
    return (
      <View style={this.props.styles.launchContainer}>
        <TouchableOpacity
          style={this.props.styles.launchButton}
          onPress={() => this.props.toggleModal()}>
          <CustomText font='bold' style={this.props.styles.launchText}>LAUNCH</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.props.styles.launchButton}
          onPress={() => {
            this.props.toggleModal()
            this.props.navigation.goBack()
          }}>
          <CustomText font='bold' style={this.props.styles.cancelText}>CANCEL</CustomText>
        </TouchableOpacity>
      </View>
    )
  }
}
