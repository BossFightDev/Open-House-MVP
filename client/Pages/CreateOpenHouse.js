import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import Sidebar from '../Containers/COH/Sidebar';

export default class extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Sidebar MLS='1234567' Address='123 Main Street, San Marcos'/>
        <View>
          <Button
            onPress={ () => this.props.navigation.navigate('Signup') }
            title='Preview and Launch'
            color='black'
          />
        </View>
      </View>
    )
  }
}
