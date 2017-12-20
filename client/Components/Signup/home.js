import React, { Component } from 'react'
import { View, Image } from 'react-native'
import CustomText from '../CustomText'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <View style={{width: 100, height: 100}}>
          <Image source={require("../../Assets/iconExit.png")} />
        </View>
      </View>
    )
  }
}
