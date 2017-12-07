import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

class AddressCard extends Component{
  constructor(props) {
    super()
  }
  render() {
  return(
    <View style={this.props.style}>
      <Image source={require('../../Assets/iconHouse.png')} />
      <Text>MLS# {this.props.MLS}</Text>
      <Text>{this.props.Address}</Text>
      <Button
        onPress={() => this.props.navigation.navigate('OpenHouses')}
        title='Change Property'
        color='blue'
      />
    </View>
  )}
}

const styles = StyleSheet.create({

})

export default AddressCard