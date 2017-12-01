import React, { Component } from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return(
      <View>
        <Image source={require('../Assets/logo.png')} />
        <Text>Username</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <Text>Password</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          onPress={ () => this.props.navigation.navigate('OpenHouses') }
          title='Login'
          color='black'
        />
        <Text>Forgot Password</Text>
      </View>
    )
  }
}
