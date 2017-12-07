import React, { Component } from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';
import { authenticateUser } from '../actions';
import {connect} from 'react-redux'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return(
      <View style={{alignItems: 'center'}}>
        <Image source={require('../Assets/logo.png')} />
        <Text>Username</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1, width: '75%'}}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <Text>Password</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1, width: '75%'}}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          onPress={
            () => {
              const validated = authenticateUser(true); // <~~ change this to true or false
              if (validated.authenticate) this.props.navigation.navigate('OpenHouses')
            }}
          title='Login'
          color='black'
        />
        <Button
          onPress={
            () => {this.props.navigation.navigate('CreateOpenHouse')}}
          title='COH'
          color='purple'
        />
        <Text>Forgot Password</Text>
        <Text> {this.props.authenticated} </Text>
      </View>
    )
  }
}

const mapStateToProps= (state) => {
  return {authenticated : state.authenticated}
}

export default connect(mapStateToProps, { authenticateUser })(Login)
