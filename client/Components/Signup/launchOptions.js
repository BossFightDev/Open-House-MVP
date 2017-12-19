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
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', alignItems: 'center', width: '45%', borderRadius: 5, margin: 1 }}
          onPress={() => this.props.toggleModal()}>
          <CustomText font='bold' style={{color: 'yellowgreen', fontSize: 22}}>LAUNCH</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', alignItems: 'center', width: '45%', borderRadius: 5, margin: 1 }}
          onPress={() => {
            this.props.toggleModal()
            this.props.navigation.goBack()
          }}>
          <CustomText font='bold' style={{color: 'red', fontSize: 22}}>CANCEL</CustomText>
        </TouchableOpacity>
      </View>
    )
  }
}
