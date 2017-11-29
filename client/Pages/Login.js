import React, { Component } from 'react';
import { TextInput, View, Text, Picker, Button } from 'react-native';

export default class extends Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    title: 'Log In',
  }

  render() {
    return(
      <View>
        <Text>Log In</Text>
      </View>
    )
  }
}
