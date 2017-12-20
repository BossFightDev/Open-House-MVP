import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import CustomText from '../CustomText';

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={this.props.styles.container}>
        <View style={this.props.styles.titleContainer}>
          <CustomText
            font='milkshake'
            style={this.props.styles.headerText}
          >
            Thank You
          </CustomText>
          <CustomText
            style={this.props.styles.subHeaderText}
          >
            Enjoy your visit
          </CustomText>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={require("../../Assets/iconHouse3x.png")} />
        </View>
      </View>
    )
  }
}
