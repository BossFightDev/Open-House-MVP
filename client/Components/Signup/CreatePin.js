import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      created: false,
      confirmed: false,
      pin: '',
      confirmedPin: '',
      errorMessage: '',
    }
    this.cancelPin = this.cancelPin.bind(this)
    this.clearPins = this.clearPins.bind(this)
    this.setPin = this.setPin.bind(this)
  }

  componentDidUpdate() {
    if (this.state.pin.length === 4 && this.state.confirmedPin.length === 4) {
      if (this.state.pin === this.state.confirmedPin) this.props.confirmPin()
      else {
        this.setState({ errorMessage: 'PIN\'s don\'t match! Try again.'})
        setTimeout(() => {
          this.setState({ errorMessage: ''})
        }, 3000)
        this.cancelPin()
        this.clearPins()
      }
    }
  }

  cancelPin() {
    this.setState({ created: false })
    this.setState({ confirmed: false })
    this.setState({ pin: '' })
    this.setState({ confirmedPin: '' })
  }

  clearPins() {
    this.refs.pin1.clear()
    this.refs.pin2.clear()
    this.refs.pin3.clear()
    this.refs.pin4.clear()
    this.refs.pin1.focus()
  }

  setPin(event) {
    if (!this.state.created) {
      const newPin = this.state.pin.concat(event.nativeEvent.text)
      this.setState({ pin: newPin })
    } else {
      const newPin = this.state.confirmedPin.concat(event.nativeEvent.text)
      this.setState({ confirmedPin: newPin })
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        {!this.state.created ?
          <Text>Create PIN to launch</Text> : <Text>Re-enter PIN to confirm</Text>
        }
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{textAlign: 'center'}}
            ref='pin1'
            keyboardType={'numeric'}
            maxLength={1}
            autoFocus={true}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin2.focus()}
          />
          <TextInput
            ref='pin2'
            keyboardType={'numeric'}
            maxLength={1}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin3.focus()}
          />
          <TextInput
            ref='pin3'
            keyboardType={'numeric'}
            maxLength={1}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin4.focus()}
          />
          <TextInput
            ref='pin4'
            keyboardType={'numeric'}
            maxLength={1}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChange={this.setPin}
            onChangeText={() => {
              if (!this.state.created) {
                this.setState({ created: true })
                this.clearPins()
              }
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.toggleModal()
            this.props.launchSignup()
          }}>
          <Text style={{color: 'blue'}}>Cancel</Text>
        </TouchableOpacity>
        <Text>{this.state.errorMessage}</Text>
      </View>
    )
  }
}
