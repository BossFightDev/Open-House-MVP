import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

class AddressCard extends Component{
  constructor(props) {
    super()
  }
  render() {
  return(
    <View style={this.props.style}>
      <Image source={require('../../Assets/iconHouse2x.png')} />
      <Text style={styles.text}>MLS# {this.props.MLS}</Text>
      <Text style={styles.text}>{this.props.Address}</Text>
      <Button
        onPress={() => this.props.navigation.navigate('OpenHouses')}
        title='Change Property'
        color='blue'
      />
    </View>
  )}
}

const styles = StyleSheet.create({
  text:{
    color: '#fff',
    fontSize: 16,
  }

})

export default AddressCard