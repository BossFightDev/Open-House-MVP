import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin: '',
    }
  }
  render() {
    return (
      <View>
        <Text>Create PIN to launch</Text>
        <TextInput
          keyboardType={'numeric'}
          autoFocus={true}
          style={{borderColor: 'black', borderWidth: 1, width: 25}}
          onChange={(num) => this.setState({ pin1: num })}
          value={this.state.pin1}
        />
        <TextInput
          keyboardType={'numeric'}
          style={{borderColor: 'black', borderWidth: 1, width: 25}}
          onChange={(num) => this.setState({ pin2: num })}
          value={this.state.pin2}
        />
        <TextInput
          keyboardType={'numeric'}
          style={{borderColor: 'black', borderWidth: 1, width: 25}}
          onChange={(num) => this.setState({ pin3: num })}
          value={this.state.pin3}
        />
        <TextInput
          keyboardType={'numeric'}
          style={{borderColor: 'black', borderWidth: 1, width: 25}}
          onChange={(num) => this.setState({ pin4: num })}
          value={this.state.pin4}
        />
      </View>
    )
  }
}
