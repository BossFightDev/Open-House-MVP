import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      launched: false,
    }
  }
  render() {
    return (
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{backgroundColor: 'white'}}
          onPress={() => this.props.launchSignup()}>
          <Text style={{color: 'green'}}>Launch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'white'}}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{color: 'red'}}>Edit/Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
