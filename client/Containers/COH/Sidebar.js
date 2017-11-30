import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
        <View>
          <Image source={require('../../Assets/logo.png')} />
          <View>
            <Image source={require('../../Assets/iconHouse.png')} />
            <Text>MLS# {this.props.MLS}</Text>
            <Text>{this.props.Address}</Text>
            <Button
              onPress={ () => this.props.navigation.navigate('OpenHouses')}
              title='Change Property'
              color='blue'
            />
          </View>
      </View>
    )
  }
}
