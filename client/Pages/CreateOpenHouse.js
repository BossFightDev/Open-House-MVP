import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Button
          onPress={ () => this.props.navigation.navigate('Signup') }
          title='Preview and Launch'
          color='black'
        />
      </View>
    )
  }
}
